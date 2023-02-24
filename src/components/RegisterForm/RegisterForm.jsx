import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/auth.operations';
// import { register } from 'redux/auth/operations';
// import css from './RegisterForm.module.css';
import { Form } from './RegistrationForm.styled';
import { Input, Label, Button } from 'commonStyles/coommonStyles.styled';
import { Notify } from 'notiflix';
export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const user = {
      name: form.elements.name.value,
      email: form.elements.email.value,
      password: form.elements.password.value,
    };
    if (user.name.length < 2) {
      return Notify.failure('Username should be at least 2 characters');
    }
    if (user.password.length < 7) {
      return Notify.failure('Password should be at least 7 characters');
    }

    dispatch(register({ ...user }))
      .then(data => {
        if (data.error) {
          throw new Error('Email or Password is incorrect');
        }
      })
      .catch(e => {
        Notify.failure(`${user.name} is already registered or incorrect Email`);
      });
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Label>
        Username
        <Input type="text" name="name" />
      </Label>
      <Label>
        Email
        <Input type="email" name="email" />
      </Label>
      <Label>
        Password
        <Input type="password" name="password" />
      </Label>
      <Button type="submit">Sign Up</Button>
    </Form>
  );
};
