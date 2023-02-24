import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/auth.operations';
import { ExitBtn } from './userMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();

  return (
    <ExitBtn type="button" onClick={() => dispatch(logOut())}>
      LogOut
    </ExitBtn>
  );
};
