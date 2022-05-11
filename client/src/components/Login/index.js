import React, {useState, useEffect }from 'react'
import LoginForm from './LoginForm';


export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
   const [error, setErrors] = useState("")
   const [loading, setLoading] = useState(true);

   useEffect(() => {
    if (localStorage.getItem('token') !== null) {
      window.location.replace('http://localhost:3000/dashboard');
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

    fetch('http://127.0.0.1:8000/api/v1/barrit/auth/login/', {
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
          window.location.replace('http://localhost:3000/dashboard');
        } else {
          setEmail('');
          setPassword('');
          localStorage.clear();
          setErrors(true);
        }
      });
  };

//    const adminUser = {
//        email:"jesse@me.com",
//        password: "admin123"
//    }

//    const Login = details => {
//        console.log(details)

//        if (details.email == adminUser.email && details.password == adminUser.password){

//            console.log("Logged in");
//            setUser({
//                name: details.name,
//                email: details.email
//            })

//        } else {
//            setError("Details do not match!")
//        }
//    }

//    const Logout = () => {
//         setUser({name: "", email: ""})       
//    }

  return (
    // <div>
    //     {(user.email != "") ? (
    //         <div className='welcome'>
    //             <h2>Welcome, <span>{user.name}</span></h2>
    //             <button onClick={Logout}>Logout</button>
    //         </div>
    //     ): (
    //         <LoginForm Login={Login} error={error} />
    //     )}
    // </div>
    <div>
      {loading === false && <h1>Login</h1>}
      {error === true && <h2>Cannot log in with provided credentials</h2>}
      {loading === false && (
        <form onSubmit={onSubmit}>
          <label htmlFor='email'>Email address:</label> <br />
          <input
            name='email'
            type='email'
            value={email}
            required
            onChange={e => setEmail(e.target.value)}
          />{' '}
          <br />
          <label htmlFor='password'>Password:</label> <br />
          <input
            name='password'
            type='password'
            value={password}
            required
            onChange={e => setPassword(e.target.value)}
          />{' '}
          <br />
          <input type='submit' value='Login' />
        </form>
      )}
    </div>

  )
}
