import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';

function App() {
  return (
    <div className="page">
      <div className="page__container">
        <Header />
        <Routes>
          <Route exact path={'/'} element={<Main />} />
          <Route path={'/movies'} element={<Movies />} />
          <Route path={'/saved-movies'} element={<SavedMovies />} />
          <Route path={'/profile'} element={<Profile />} />
          <Route path={'/signup'} element={<Register />} />
          <Route path={'/signin'} element={<Login />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
