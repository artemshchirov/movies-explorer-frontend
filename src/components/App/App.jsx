import './App.css';
import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';

import ProtectedRoute from '../../hocs/ProtectedRoute.jsx';
import Main from '../Main/Main.jsx';
import Movies from '../Movies/Movies.jsx';
import SavedMovies from '../SavedMovies/SavedMovies.jsx';
import Profile from '../Profile/Profile.jsx';
import Register from '../Register/Register.jsx';
import Login from '../Login/Login.jsx';
import NotFound from '../NotFound/NotFound.jsx';
import Alert from '../Alert/Alert.jsx';

import MainApi from '../../utils/MainApi';
import MoviesApi from '../../utils/MoviesApi';
import { configMainApi, configMoviesApi } from '../../utils/configApi';
import { PAGES, ALERT_MESSAGES } from '../../utils/constants';
import LocalStorage from '../../utils/LocalStorage';

function App() {
  const [currentUser, setCurrentUser] = useState({});

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isFetchError, setIsFetchError] = useState(false);

  const [token, setToken] = useState('');

  const [isPreloader, setIsPreloader] = useState(false);
  const [loaderButton, setLoaderButton] = useState(false);

  const [messageAlert, setMessageAlert] = useState(null);
  const [isActiveAlert, setIsActiveAlert] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const mainApi = new MainApi(configMainApi);
  const moviesApi = new MoviesApi(configMoviesApi);
  const jwtLocal = new LocalStorage('jwt');
  const moviesLocal = new LocalStorage('movies');
  const searchQueryMoviesLocal = new LocalStorage('search-query-movies', {
    movies: '',
    short: true,
  });
  const searchQuerySavedMoviesLocal = new LocalStorage(
    'search-query-saved-movies',
    { movies: '', short: true }
  );

  useEffect(() => {
    setIsFetchError(false);
  }, [location]);

  useEffect(() => {
    handleLoginToken();
  }, []);

  function requestAllFilms() {
    return moviesApi.getFilms();
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

  function handleLogin(user) {
    setLoaderButton(true);
    setIsFetchError(false);

    mainApi
      .signin(user)
      .then((res) => {
        const jwt = res.token;
        setToken(jwt);
        setIsLoggedIn(true);
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
      setIsPreloader(false);
    }
  }

  function clearLocal() {
    jwtLocal.delete();
    moviesLocal.delete();
    searchQueryMoviesLocal.delete();
    searchQuerySavedMoviesLocal.delete();
  }

  function handleLogout() {
    setIsLoggedIn(false);
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

  return (
    <div className="page">
      <div className="page__container">
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
              <ProtectedRoute path={PAGES.MOVIES} isLoggedIn={isLoggedIn}>
                <Movies
                  isLoading={isPreloader}
                  setIsLoading={setIsPreloader}
                  searchQueryMoviesLocal={searchQueryMoviesLocal}
                />
              </ProtectedRoute>
            }
          />
          <Route
            path={PAGES.SAVED_MOVIES}
            element={
              <ProtectedRoute path={PAGES.SAVED_MOVIES} isLoggedIn={isLoggedIn}>
                <SavedMovies />
              </ProtectedRoute>
            }
          />
          <Route
            path={PAGES.PROFILE}
            element={
              <ProtectedRoute path={PAGES.PROFILE} isLoggedIn={isLoggedIn}>
                <Profile handleLogout={handleLogout} />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<NotFound isLoggedIn={isLoggedIn} />} />
        </Routes>

        <Alert messageAlert={messageAlert} isActiveAlert={isActiveAlert} />
      </div>
    </div>
  );
}

export default App;
