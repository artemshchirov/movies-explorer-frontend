import './App.css';
import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

import ProtectedRoute from '../../hocs/ProtectedRoute.jsx';
import Main from '../../pages/Main/Main.jsx';
import Movies from '../../pages/Movies/Movies.jsx';
import SavedMovies from '../../pages/SavedMovies/SavedMovies.jsx';
import Profile from '../../pages/Profile/Profile.jsx';
import Register from '../../pages/Register/Register.jsx';
import Login from '../../pages/Login/Login.jsx';
import NotFound from '../../pages/NotFound/NotFound.jsx';
import Alert from '../Alert/Alert.jsx';
import Preloader from '../Preloader/Preloader.jsx';

import MainApi from '../../utils/MainApi';
import MoviesApi from '../../utils/MoviesApi';
import LocalStorage from '../../utils/LocalStorage';
import { PAGES, ALERT_MESSAGES } from '../../utils/constants';
import { configMainApi, configMoviesApi } from '../../utils/configApi';

function App() {
  const [authorized, setAuthorized] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [isFetchError, setIsFetchError] = useState(false);

  const [token, setToken] = useState('');

  const [loading, setLoading] = useState(true);
  const [loaderButton, setLoaderButton] = useState(false);

  const [messageAlert, setMessageAlert] = useState(null);
  const [isActiveAlert, setIsActiveAlert] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const mainApi = new MainApi(configMainApi);
  const moviesApi = new MoviesApi(configMoviesApi);
  const jwtLocal = new LocalStorage('jwt');
  const moviesLocal = new LocalStorage('movies');
  const searchQueryLocal = new LocalStorage('search-query-movies', {
    movies: '',
    short: false,
  });
  const searchQuerySavedMoviesLocal = new LocalStorage(
    'search-query-saved-movies',
    { movies: '', short: true }
  );

  useEffect(() => {
    handleLoginToken();
  }, []);

  function requestAllMovies() {
    return moviesApi.getMovies();
  }

  function requestLikeMovies() {
    return mainApi.fetchLikeMovies(token);
  }

  function handleRegister({ name, email, password }) {
    setLoaderButton(true);
    setIsFetchError(false);
    mainApi
      .signup({ name, email, password })
      .then(() => {
        handleLogin({ email, password });
      })
      .catch(() => {
        setIsFetchError(true);
        showAlert(ALERT_MESSAGES.ERROR.AUTH);
      })
      .finally(() => {
        setLoaderButton(false);
      });
  }

  function getUserInfo(token) {
    mainApi
      .getUserInfo(token)
      .then((user) => {
        if (!authorized) setAuthorized(true);
        setCurrentUser(user);
      })
      .catch(() => {
        showAlert(ALERT_MESSAGES.ERROR.GET_USER);
        throw new Error();
      })
      .finally(() => {
        setLoading(false);
      });
  }

  function handleLogin(user) {
    setLoaderButton(true);
    setIsFetchError(false);
    mainApi
      .signin(user)
      .then((res) => {
        const jwt = res.token;
        setToken(jwt);
        setAuthorized(true);
        jwtLocal.save(jwt);
        getUserInfo(jwt);
        navigate(PAGES.MOVIES);
      })
      .catch(() => {
        setIsFetchError(true);
        showAlert(ALERT_MESSAGES.ERROR.AUTH);
      })
      .finally(() => {
        setLoaderButton(false);
      });
  }

  function handleLoginToken() {
    const jwt = jwtLocal.load();
    if (jwt) {
      setToken(jwt);
      getUserInfo(jwt);
    } else {
      setLoading(false);
    }
  }

  function clearLocal() {
    jwtLocal.delete();
    moviesLocal.delete();
    searchQueryLocal.delete();
    searchQuerySavedMoviesLocal.delete();
  }

  function handleLogout() {
    setAuthorized(false);
    setToken('');
    setCurrentUser({});
    clearLocal();
    navigate(PAGES.MAIN);
  }

  function showAlert(message) {
    setMessageAlert(message);
    setIsActiveAlert(true);
    setTimeout(() => {
      setIsActiveAlert(false);
    }, 3000);
  }

  function handleLikeMovieClick(movieId, movie) {
    return movieId
      ? mainApi.deleteLikeMovie(movieId, token).catch(() => {
          showAlert(ALERT_MESSAGES.ERROR.DELETE_FILM);
          throw new Error();
        })
      : mainApi.addLikeMovie(movie, token).catch(() => {
          showAlert(ALERT_MESSAGES.ERROR.ADD_FILM);
          throw new Error();
        });
  }

  return (
    <div className="page">
      <div className="page__container">
        {loading ? (
          <Preloader />
        ) : (
          <>
            <CurrentUserContext.Provider value={authorized}>
              <Routes>
                <Route
                  path={PAGES.SIGNUP}
                  element={<Register handleRegister={handleRegister} />}
                />
                <Route
                  path={PAGES.SIGNIN}
                  element={<Login handleLogin={handleLogin} />}
                />

                <Route path={'/'} element={<Main />} />

                <Route
                  path={PAGES.MOVIES}
                  element={
                    <ProtectedRoute path={PAGES.MOVIES} authorized={authorized}>
                      <Movies
                        loading={loading}
                        setLoading={setLoading}
                        moviesLocal={moviesLocal}
                        searchQueryLocal={searchQueryLocal}
                        requestAllMovies={requestAllMovies}
                        handleLikeMovieClick={handleLikeMovieClick}
                        requestLikeMovies={requestLikeMovies}
                        showAlert={showAlert}
                      />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path={PAGES.SAVED_MOVIES}
                  element={
                    <ProtectedRoute
                      path={PAGES.SAVED_MOVIES}
                      authorized={authorized}
                    >
                      <SavedMovies
                        searchQueryLocal={searchQueryLocal}
                        handleLikeMovieClick={handleLikeMovieClick}
                        requestLikeMovies={requestLikeMovies}
                        showAlert={showAlert}
                      />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path={PAGES.PROFILE}
                  element={
                    <ProtectedRoute
                      path={PAGES.PROFILE}
                      authorized={authorized}
                    >
                      <Profile handleLogout={handleLogout} />
                    </ProtectedRoute>
                  }
                />

                <Route
                  path="*"
                  element={<NotFound authorized={authorized} />}
                />
              </Routes>

              <Alert
                messageAlert={messageAlert}
                isActiveAlert={isActiveAlert}
              />
            </CurrentUserContext.Provider>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
