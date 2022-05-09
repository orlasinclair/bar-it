import React, {useEffect, useState} from 'react'
import validate from './validate';

export default function Signup({submitForm}) {

    const [values, setValues] = useState({
        name: "",
        email: "",
        password: ""
    });

    const [errors, setErrors] = useState({})
    const [dataIsCorrect, setDataIsCorrect] = useState(false)

    const handleChange = (e) => {
        setValues({
            ...values, 
            [e.target.name]: e.target.value,
        });
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setErrors(validate(values));
        setDataIsCorrect(true)
    }

    useEffect(() => {
        if(Object.keys(errors).length === 0 && dataIsCorrect ){
            submitForm(true)
        }
    }, [errors])

  return (
    <div className="container">
        <div className="app-wrapper">
            <div>
                <h2 className="title">Create Account</h2>
            </div>
            <form className="form-wrapper">
                <div className="name">
                    <label className='label'> Name</label>
                    <input className="input" type="text" name="name" value={values.name} onChange={handleChange} />
                    {errors.name && <p className="error">{errors.name}</p>}
                </div>
                <div className="email">
                    <label className='label'> Email</label>
                    <input className="input" type="email" name="email" value={values.email} onChange={handleChange}/>
                    {errors.email && <p className="error">{errors.email}</p>}
                </div>
                <div className="password">
                    <label className='label'> Password</label>
                    <input className="input" type="password" name="password" value={values.password} onChange={handleChange}/>
                    {errors.password && <p className="error">{errors.password}</p>}
                </div>
                <div>
                    <button className="submit" onClick={handleFormSubmit}>Sign up </button>
                </div>
            </form>
        </div>
    </div>
  )
}
