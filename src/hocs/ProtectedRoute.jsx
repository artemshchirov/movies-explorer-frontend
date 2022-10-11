import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';
import { PAGES } from '../utils/constants';
import Preloader from '../components/Preloader/Preloader.jsx';

const ProtectedRoute = ({ loading, children }) => {
  const authorized = useContext(CurrentUserContext);

  if (loading) return <Preloader />;
  
  return authorized ? children : <Navigate to={PAGES.MAIN} />;
};

export default ProtectedRoute;
