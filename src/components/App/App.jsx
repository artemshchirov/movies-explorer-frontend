import './App.css';
import { Routes, Route } from 'react-router-dom';
import Main from '../Main/Main.jsx';
import Movies from '../Movies/Movies.jsx';
import SavedMovies from '../SavedMovies/SavedMovies.jsx';
import Profile from '../Profile/Profile.jsx';
import Register from '../Register/Register.jsx';
import Login from '../Login/Login.jsx';
import NotFound from '../NotFound/NotFound.jsx';

function App() {
  return (
    <div className="page">
      <div className="page__container">
        <div className="content-wrapper">
          <Routes>
            <Route exact path={'/'} element={<Main />} />
            <Route path={'/movies'} element={<Movies />} />
            <Route path={'/saved-movies'} element={<SavedMovies />} />
            <Route path={'/profile'} element={<Profile />} />
            <Route path={'/signup'} element={<Register />} />
            <Route path={'/signin'} element={<Login />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
