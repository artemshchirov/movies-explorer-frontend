import './App.css';
import { useState, useEffect, useNavigate } from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from '../Main/Main.jsx';
import Movies from '../Movies/Movies.jsx';
import SavedMovies from '../SavedMovies/SavedMovies.jsx';
import Profile from '../Profile/Profile.jsx';
import Register from '../Register/Register.jsx';
import Login from '../Login/Login.jsx';
import NotFound from '../NotFound/NotFound.jsx';

import MainApi from '../../utils/MainApi';
import MoviesApi from '../../utils/MoviesApi';
import { configMainApi, configMoviesApi } from '../../utils/configApi';
import LocalStorage from '../../utils/LocalStorage';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  const mainApi = new MainApi(configMainApi);
  const moviesApi = new MoviesApi(configMoviesApi);
  const jwtLocal = new LocalStorage('jwt');
  const MoviesLocal = new LocalStorage('movies');
  const searchQueryMoviesLocal = new LocalStorage('search-query-movies', {
    movies: '',
    short: true,
  });
  const searchQuerySavedMoviesLocal = new LocalStorage(
    'search-query-saved-movies',
    { movies: '', short: true }
  );

  console.log('searchQueryMoviesLocal: ', searchQueryMoviesLocal);

  return (
    <div className="page">
      <div className="page__container">
        <Routes>
          <Route exact path={'/'} element={<Main />} />
          <Route
            path={'/movies'}
            element={
              <Movies
                isLoading={isLoading}
                setIsLoading={setIsLoading}
                searchQueryMoviesLocal={searchQueryMoviesLocal}
              />
            }
          />
          <Route path={'/saved-movies'} element={<SavedMovies />} />
          <Route path={'/profile'} element={<Profile />} />
          <Route path={'/signup'} element={<Register />} />
          <Route path={'/signin'} element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
