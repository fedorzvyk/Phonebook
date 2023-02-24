import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/auth.operations';
// import { register } from 'redux/auth/operations';
// import css from './RegisterForm.module.css';
import { EyeBtn, Form, PswrdInput } from './RegistrationForm.styled';
import { Input, Label, Button } from 'commonStyles/coommonStyles.styled';
import { toast } from 'react-toastify';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import { useState } from 'react';
export const RegisterForm = () => {
  const dispatch = useDispatch();

  const [isPass, setIsPass] = useState(true);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const user = {
      name: form.elements.name.value,
      email: form.elements.email.value,
      password: form.elements.password.value,
    };
    if (user.name.length < 2) {
      return toast.error('Username should be at least 2 characters');
    }
    if (user.password.length < 7) {
      return toast.error('Password should be at least 7 characters');
    }

    dispatch(register({ ...user }))
      .then(data => {
        if (data.error) {
          throw new Error('Email or Password is incorrect');
        }
      })
      .catch(e => {
        toast.error(`${user.name} is already registered or incorrect Email`);
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
        <PswrdInput>
          <Input type={isPass ? 'password' : 'text'} name="password" />
          <EyeBtn type="button" onClick={() => setIsPass(prev => !prev)}>
            {isPass ? (
              <FaRegEye color="gray" />
            ) : (
              <FaRegEyeSlash color="gray" />
            )}
          </EyeBtn>
        </PswrdInput>
      </Label>
      <Button type="submit">Sign Up</Button>
    </Form>
  );
};
