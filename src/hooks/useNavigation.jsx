// useNavigation.js
import { useLocation, useNavigate } from 'react-router-dom';

export const useNavigation = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    if (path === '/all-cars') {
      return location.pathname === '/all-cars' || 
             location.pathname.startsWith('/car/') 
    }
    return location.pathname.startsWith(path);
  };

  const navigateTo = (path) => {
    navigate(path);
  };

  return { isActive, navigateTo };
};