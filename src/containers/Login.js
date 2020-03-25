import React, { useState } from 'react';
import {
  Button,
  ControlLabel,
  FormControl,
  FormGroup
} from 'react-bootstrap';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;

  const validateForm = () => email.length > 0 && password.length > 0;

  const handleChange = ({ target: { id, value } }) => setFormData({ ...formData, [id]: value });

  const handleSubmit = e => e.preventDefault();

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
