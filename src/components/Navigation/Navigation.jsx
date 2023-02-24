import { Link } from 'commonStyles/coommonStyles.styled';
import { useAuth } from 'hooks/useAuth';
import { Box } from 'commonStyles/Box';
// import css from './Navigation.module.css';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <Box display="flex" gridGap={4}>
        <Link to="/">Home</Link>
        {isLoggedIn && <Link to="/contacts">Contacts</Link>}
      </Box>
    </nav>
  );
};
