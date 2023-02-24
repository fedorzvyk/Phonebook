import { UserMenu } from 'components/userMenu/userMenu';
import { Navigation } from '../Navigation/Navigation';
import { AuthNav } from 'components/authNav/authNav';
import { useAuth } from 'hooks/useAuth';
import { Box } from 'commonStyles/Box';
// import css from './AppBar.module.css';

export const AppBar = () => {
  const { isLoggedIn, user } = useAuth();

  return (
    <Box
      display="flex"
      flexDirection="column"
      as="header"
      width="100%"
      py={4}
      borderBottom="normal"
      gridGap={3}
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        gridGap={3}
      >
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Box>

      <Box width="100%" justifyContent="center" display="flex">
        {isLoggedIn && <h3>Welcome, {user.name}!</h3>}
      </Box>
    </Box>
  );
};
