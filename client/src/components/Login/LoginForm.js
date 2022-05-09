import React from 'react'

export default function LoginForm() {
  return (
    <div>
        <form>
            <div className='form-inner'>
                <h2>Login</h2>
                {/* ERROR */}
                <div className='form-group'>
                    <label htmlFor="name">Name:</label>
                    <input type ="text" name="name" id="name" />
                </div>
                <div className='form-group'>
                    <label htmlFor="email">email:</label>
                    <input type ="text" name="email" id="email" />
                </div>
                <div className='form-group'>
                    <label htmlFor="password">password:</label>
                    <input type ="text" name="password" id="password" />
                </div>
                    <input type="submit" value="Login"/>
            </div>
        </form>
    </div>
  )
}
