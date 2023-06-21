import React, {useState, useContext} from 'react'
// import Header from '../../layouts/Header'
// import LoginInput from '../../UI/button/LoginInput'
import '../../pages/authentication/styles/login.css'
import axios from 'axios'
import { AuthContext } from '../../../shared/AuthContext'
import { Link } from 'react-router-dom'
export const setAuthToken = token => {
  if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }
  else
      delete axios.defaults.headers.common["Authorization"];
}

export default function Login() {
  
  const [isRegister, setIsRegister] = useState(false)
  function h1() {
    setIsRegister(!isRegister);
    console.log(isRegister);
  }


  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  const {login}= useContext(AuthContext)
  const [error, setError] = useState('')
  const loginSubmit = async (event) => {
    event.preventDefault();
    let payload = {
      login: username,
      password: password
    }
    const res = await login(payload);
    if (res) {
      setError(res.error)
    }
  }


  return (
    
    <div className='wrap'>
        {/* <Header></Header> */}
        <div className="login-page">
        <div className="form">
        
        {/* {isRegister ?  */}
          
        <div>
          <form class="login-form">
          <p className='name'>Sign in</p>
          <p className='error'>{error}</p>
          <input type="text" placeholder="Phone or email" value={username} required onChange={event => setUsername(event.target.value)}/>
          <input type="password" placeholder="password" value={password}
                required
                onChange={event => setPassword(event.target.value)}/>
          <button type='submit' onClick={loginSubmit}>login</button>
          <p className="message">Not registered? <Link to="/register">Create an account </Link></p>
          </form>
        </div>
           
          {/* //   : ''
          // } */}
        
            
        </div>
        </div>
    </div>
    
  )
}
