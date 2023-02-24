import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/auth.operations';
import { toast } from 'react-toastify';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';

import { EyeBtn, Form, PswrdInput } from './LoginForm.styled';
import { Input, Label, Button } from 'commonStyles/coommonStyles.styled';
import { useState } from 'react';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const [isPass, setIsPass] = useState(true);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const user = {
      email: form.elements.email.value,
      password: form.elements.password.value,
    };
    if (user.password.length < 7) {
      return toast.error('Password should be at least 7 characters');
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
        toast.error('Email or Password is incorrect');
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

      <Button type="submit">Log In</Button>
    </Form>
  );
};
