import React from 'react'
import Nav from '../componant/Nav'
import './Login.css'
const Login = () => {
  return (
    <div>
     <Nav />
    <div className="container">
        <div className="row">
            <div className="col-xl-12"  id='formbox'>
            <form action="" method='POST' className='form'>
    <h1>Login</h1>
    <input placeholder='Uasername' type="text" /><br />
    <input placeholder='Email' type="email" /><br />
    <input placeholder='Password' type="Password" /><br />
    <button className='lgbtn' type='button'>Login</button>
            </form>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Login
