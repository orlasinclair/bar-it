import React, { useState, useEffect } from 'react';
import { Button, Divider, Form, Grid, Segment } from 'semantic-ui-react';
import './styles.css'

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');
  const [username, setUsername] = useState('');
  const [errors, setErrors] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem('token') !== null) {
      window.location.replace('http://localhost:8081/home');
    } else {
      setLoading(false);
    }
  }, []);

  const onSubmit = e => {
    e.preventDefault();

    const user = {
      email: email,
      password1: password1,
      password2: password2,
      username: username
    };

    fetch('https://barr-it.herokuapp.com/api/v1/barrit/auth/register/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(data => {
        if (data.key) {
          localStorage.clear();
          localStorage.setItem('token', data.key);
          window.location.replace('http://localhost:8081/home');
        } else {
          setEmail('');
          setPassword1('');
          setPassword2('');
          setUsername('');
          localStorage.clear();
          setErrors(true);
        }
      });
  };

  return (
    <div>
      <Segment placeholder>
      {errors === true && <h2>Cannot signup with provided credentials</h2>}
      <Form onSubmit={onSubmit}>
        <Form.Input
          icon='user'
          iconPosition='left'
          label='Username'
          name='username'
          type='username'
          value={username}
          onChange={e => setUsername(e.target.value)}
          required
          />{' '}
        <Form.Input
          icon='envelope'
          iconPosition='left'
          label='Email'
          name='email'
          type='email'
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />{' '}
        <Form.Input
          icon='lock'
          iconPosition='left'
          label='Password'
          name='password1'
          type='password'
          value={password1}
          onChange={e => setPassword1(e.target.value)}
          required
          />{' '}
        <Form.Input
          icon='lock'
          iconPosition='left'
          label='Confirm password'
          name='password2'
          type='password'
          value={password2}
          onChange={e => setPassword2(e.target.value)}
          required
          />{' '}
        <Button type='submit'content='Signup' />
      </Form>
          </Segment>
    </div>
  );
};
