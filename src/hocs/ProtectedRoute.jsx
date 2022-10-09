import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';
import { PAGES } from '../utils/constants';
import Preloader from '../components/Movies/Preloader/Preloader.jsx';

function ProtectedRoute({ loading, children }) {
  const authorized = useContext(CurrentUserContext);

  return (
    <>
      {loading ? (
        <Preloader />
      ) : authorized ? (
        children
      ) : (
        <Navigate to={PAGES.MAIN} />
      )}
    </>
  );
}

export default ProtectedRoute;
