import React, {useState, useEffect }from 'react'
import LoginForm from './LoginForm';
import { Button, Divider, Form, Grid, Segment } from 'semantic-ui-react';
import './styles.css'


export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
   const [error, setErrors] = useState("")
   const [loading, setLoading] = useState(true);

   useEffect(() => {
    if (localStorage.getItem('token') !== null) {
      window.location.replace('https://barr-it.netlify.app/');
    } else {
      setLoading(false);
    }
  }, []);

  const onSubmit = e => {
    e.preventDefault();

    const user = {
      email: email,
      password: password
    };

    fetch('https://barr-it.herokuapp.com/api/v1/barrit/auth/login/', {
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
          window.location.replace('https://barr-it.netlify.app/');
        } else {
          setEmail('');
          setPassword('');
          localStorage.clear();
          setErrors(true);
        }
      });
  };

  return (
    <>
    <Segment placeholder>
      {error === true && <h2>Cannot log in with provided credentials</h2>}
      {loading === false && (
        <Form onSubmit={onSubmit}>
          <Form.Input
            icon='user'
            iconPosition='left'
            label='Email'
            placeholder='Email'
            type='email'
            value={email}
            required
            onChange={e => setEmail(e.target.value)}
            />{' '}
          <Form.Input
            icon='lock'
            iconPosition='left'
            label='Password'
            type='password'
            name='password'
            value={password}
            required
            onChange={e => setPassword(e.target.value)}
            />{' '}
            <Button type='submit'content='Login'  />
        </Form>
      )}
    </Segment>
      </>

  )
}
