import React from 'react';
import {
  Button,
  ControlLabel,
  FormControl,
  FormGroup
} from 'react-bootstrap';

import { useAuthContext } from '../context/AuthContext';
import { useFormFields } from '../lib/hooks';

const Login = ({ history }) => {
  const { logIn } = useAuthContext();
  const [fields, handleChange] = useFormFields({
    email: '',
    password: ''
  });

  const { email, password } = fields;

  const validateForm = () => email.length > 0 && password.length > 0;

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      await logIn(email, password);
      history.push('/');
    } catch (e) {
      alert(e.message);
    }
  };

  return (
    <div className="Login">
      <form onSubmit={handleSubmit}>
        <FormGroup controlId="email" bsSize="large">
          <ControlLabel>Email</ControlLabel>
          <FormControl
            autoFocus
            onChange={handleChange}
            type="email"
            value={email}
          />
        </FormGroup>
        <FormGroup controlId="password" bsSize="large">
          <ControlLabel>Password</ControlLabel>
          <FormControl
            onChange={handleChange}
            type="password"
            value={password}
          />
        </FormGroup>
        <Button
          block
          bsSize="large"
          disabled={!validateForm()}
          type="submit"
        >
          Login
        </Button>
      </form>
    </div>
  );
};

export default Login;
