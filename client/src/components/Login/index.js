import React, {useState }from 'react'
import LoginForm from './LoginForm';


export default function Login() {
   const [user, setUser] = useState({name:"", email: ""});
   const [error, setError] = useState("")

   const adminUser = {
       email:"jesse@me.com",
       password: "admin123"
   }

   const Login = details => {
       console.log(details)

       if (details.email == adminUser.email && details.password == adminUser.password){

           console.log("Logged in");
           setUser({
               name: details.name,
               email: details.email
           })

       } else {
           setError("Details do not match!")
       }
   }

   const Logout = () => {
        setUser({name: "", email: ""})       
   }

  return (
    <div>
        {(user.email != "") ? (
            <div className='welcome'>
                <h2>Welcome, <span>{user.name}</span></h2>
                <button onClick={Logout}>Logout</button>
            </div>
        ): (
            <LoginForm Login={Login} error={error} />
        )}
    </div>
  )
}
