import { Box } from 'commonStyles/Box';
import { Link } from 'commonStyles/coommonStyles.styled';
// import css from './AuthNav.module.css';

export const AuthNav = () => {
  return (
    <Box display="flex" gridGap={4}>
      <Link to="/register">Register</Link>
      <Link to="/login">LogIn</Link>
    </Box>
  );
};
