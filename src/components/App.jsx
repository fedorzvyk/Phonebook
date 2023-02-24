import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { RotatingLines } from 'react-loader-spinner';

// import ContactsPage from '../pages/ContactsPage';
// import HomePage from '../pages/Home';
// import RegisterPage from '../pages/Register';
// import LoginPage from '../pages/Login';
import { Layout } from './Layout';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import { refreshUser } from 'redux/auth/auth.operations';
import { PrivateRoute } from './Routes/PrivateRoute';
import { RestrictedRoute } from './Routes/RestrictedRoute';
import { Box } from 'commonStyles/Box';

const HomePage = lazy(() => import('../pages/Home/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const ContactsPage = lazy(() => import('../pages/ContactsPage'));

export default function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Box display="flex" alignItems="center" justifyContent="center">
      <RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
    </Box>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegisterPage />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
}
