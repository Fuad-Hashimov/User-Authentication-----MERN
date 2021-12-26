import React from 'react'
import { NavLink } from 'react-router-dom'
const Login = () => {
    return (
        <div>
            <div className='conatiner shadow my-5'>
                <div className='row'>
                    <div className='col-md-5 d-flex flex-column align-items-center form'>
                        <h1 className='display-4 fw-bolder'>
                            Welcome Back
                        </h1>
                        <p className='lead text-center'>
                            Enter Your Credentials To Login
                        </p>
                        <h5 className='mb-4'>OR</h5>
                        <NavLink to='/register' className='btn btn-outline-light rounded-pill pb-2 w-50'>
                            Register
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}
 
export default Login
