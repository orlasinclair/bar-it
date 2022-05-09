import React, {useState }from 'react'
import LoginForm from './LoginForm';


export default function Login() {
   const [user, setUser] = useState({name:"", email: ""});
   const [error, setError] = useState("")

   const Login = details => {
       console.log(details)
   }

   const Logout = () => {
       console.log("logout")
   }

  return (
    <div>
        {(user.email != "") ? (
            <div className='welcome'>
                <h2>Welcome, <span>{user.name}</span></h2>
                <button>Logout</button>
            </div>
        ): (
            <LoginForm />
        )}
    </div>
  )
}
