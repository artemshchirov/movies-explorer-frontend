import { Navigate } from 'react-router-dom';
import Preloader from '../components/Movies/Preloader/Preloader.jsx';
import { PAGES } from '../utils/constants';

function ProtectedRoute({ isLoggedIn, isPreloader, children }) {
  console.log('isLoggedIn: ', isLoggedIn);
  
  return (
    <>
      {isPreloader ? (
        <Preloader />
      ) : isLoggedIn ? (
        children
      ) : (
        <Navigate to={PAGES.MAIN} />
      )}
    </>
  );
}

export default ProtectedRoute;
