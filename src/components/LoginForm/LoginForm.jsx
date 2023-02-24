import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/auth.operations';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
// import css from './LoginForm.module.css';
import { Form } from './LoginForm.styled';
import { Input, Label, Button } from 'commonStyles/coommonStyles.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const user = {
      email: form.elements.email.value,
      password: form.elements.password.value,
    };
    if (user.password.length < 7) {
      return Notify.failure('Password should be at least 7 characters');
    }
    dispatch(
      logIn({
        ...user,
      })
    )
      .then(data => {
        if (data.error) {
          throw new Error('Email or Password is incorrect');
        }
      })
      .catch(e => {
        Notify.failure('Email or Password is incorrect');
      });
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Label>
        Email
        <Input type="email" name="email" />
      </Label>
      <Label>
        Password
        <Input type="password" name="password" />
      </Label>
      <Button type="submit">Log In</Button>
    </Form>
  );
};
