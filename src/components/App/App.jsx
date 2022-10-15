import './App.css';
import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import CurrentUserContext from '../../contexts/CurrentUserContext';

import ProtectedRoute from '../../hocs/ProtectedRoute';
import Main from '../../pages/Main/Main';
import Movies from '../../pages/Movies/Movies';
import SavedMovies from '../../pages/SavedMovies/SavedMovies';
import Profile from '../../pages/Profile/Profile';
import Register from '../../pages/Register/Register';
import Login from '../../pages/Login/Login';
import NotFound from '../../pages/NotFound/NotFound';
import Alert from '../Alert/Alert';
import Preloader from '../Preloader/Preloader';

import MainApi from '../../utils/MainApi';
import MoviesApi from '../../utils/MoviesApi';
import LocalStorage from '../../utils/LocalStorage';
import { PAGES, ALERT_MESSAGES } from '../../utils/constants';
import { configMainApi, configMoviesApi } from '../../utils/configApi';

function App() {
  const [authorized, setAuthorized] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [token, setToken] = useState('');

  const [loading, setLoading] = useState(true);

  const [messageAlert, setMessageAlert] = useState(null);
  const [isActiveAlert, setIsActiveAlert] = useState(false);

  const navigate = useNavigate();

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
    { movies: '', short: false }
  );

  useEffect(() => {
    handleLoginToken();
  }, []);

  const requestAllMovies = () => moviesApi.getMovies();

  const requestLikeMovies = () => mainApi.fetchLikeMovies(token);

  const showAlert = (message) => {
    setMessageAlert(message);
    setIsActiveAlert(true);
    setTimeout(() => {
      setIsActiveAlert(false);
    }, 3000);
  };

  const getUserInfo = (jwt) => {
    mainApi
      .getUserInfo(jwt)
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
  };

  const handleLogin = (user) => {
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
        showAlert(ALERT_MESSAGES.ERROR.AUTH);
      })
      .finally(() => {});
  };

  const handleRegister = ({ name, email, password }) => {
    mainApi
      .signup({ name, email, password })
      .then(() => {
        handleLogin({ email, password });
      })
      .catch(() => {
        showAlert(ALERT_MESSAGES.ERROR.AUTH);
      })
      .finally(() => {});
  };

  const handleLoginToken = () => {
    const jwt = jwtLocal.load();
    if (jwt) {
      setToken(jwt);
      getUserInfo(jwt);
    } else {
      setLoading(false);
    }
  };

  const clearLocal = () => {
    jwtLocal.delete();
    moviesLocal.delete();
    searchQueryLocal.delete();
    searchQuerySavedMoviesLocal.delete();
  };

  const handleLogout = () => {
    setAuthorized(false);
    setToken('');
    setCurrentUser({});
    clearLocal();
    navigate(PAGES.MAIN);
  };

  const handleLikeMovieClick = (movieId, movie) =>
    movieId
      ? mainApi.deleteLikeMovie(movieId, token).catch(() => {
          showAlert(ALERT_MESSAGES.ERROR.DELETE_FILM);
          throw new Error();
        })
      : mainApi.addLikeMovie(movie, token).catch(() => {
          showAlert(ALERT_MESSAGES.ERROR.ADD_FILM);
          throw new Error();
        });

  // Update user info
  const handleUpdateUser = (user) =>
    mainApi
      .updateUserInfo(user, token)
      .then((newData) => {
        setCurrentUser(newData);
        showAlert(ALERT_MESSAGES.SUCCESSFULLY.UPDATE_PROFILE);
      })
      .catch(() => {
        showAlert(ALERT_MESSAGES.ERROR.UPDATE_PROFILE);
        throw new Error();
      });

  return (
    <div className="page">
      <div className="page__container">
        {loading ? (
          <Preloader />
        ) : (
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

              <Route path="/" element={<Main authorized={authorized} />} />

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
                      searchQuerySavedMoviesLocal={searchQuerySavedMoviesLocal}
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
                  <ProtectedRoute path={PAGES.PROFILE} authorized={authorized}>
                    <Profile
                      currentUser={currentUser}
                      handleLogout={handleLogout}
                      handleUpdateUser={handleUpdateUser}
                    />
                  </ProtectedRoute>
                }
              />

              <Route path="*" element={<NotFound authorized={authorized} />} />
            </Routes>

            <Alert messageAlert={messageAlert} isActiveAlert={isActiveAlert} />
          </CurrentUserContext.Provider>
        )}
      </div>
    </div>
  );
}

export default App;
