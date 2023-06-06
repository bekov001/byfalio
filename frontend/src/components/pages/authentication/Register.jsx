import React, {useState, useContext} from 'react'
import AuthContext from '../../../shared/AuthContext';
// import LoginInput from '../../UI/button/LoginInput';
import '../../pages/authentication/styles/login.css'
// import Header from '../../layouts/Header';

export default function Register() {

  const [phoneNumber, setPhoneNumber] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [byEmail, setByEmail] = useState(true)
  const [error, setError] = useState(true)
  const {register}= useContext(AuthContext)
 
  const registerSubmit = async (event) => {
    event.preventDefault();
    let payload = {};
    if (byEmail) {
       payload = {

        email: email,
        password: password,
        password2: password2
      }
    }
    else {
       payload = {
        phone_number: phoneNumber,
        password: password,
        password2: password2
      }
    }

    let data = await register(payload);
    if (data) {
      console.log(data.data);
      setError(data.data.error[0]);
    }
    
  }


    return (
      
  
      <div className='wrap'>
        {/* <Header></Header> */}
          <div className="login-page">
          <div className="form">
  
          <div className='container'>
          {/* <div onClick={()=>{setTabActive(1)}} className={tabActive == 1 ? "token_buy_btn token_buy_btn_active" : "token_buy_btn"}>
                Рыночный
            </div>
            <div onClick={()=>{setTabActive(2)}} className={tabActive == 2 ? "token_buy_btn token_buy_btn_active" : "token_buy_btn"}>
                Лимитный
            </div> */}
          <button onClick={() => setByEmail(true)} className={byEmail ? "token_buy_btn token_buy_btn_active" : "token_buy_btn"}>
            By Email
          </button>
          <button onClick={() => setByEmail(false) }  className={!byEmail ? "token_buy_btn token_buy_btn_active" : "token_buy_btn"} >
            By Phone
          </button>
        </div>
        {!byEmail ? <form className="register-form">
        <p className='name'>Register</p>
        <p className='error'>{error}</p>
        <input type="tel" maxlength='12' placeholder="Phone" value={phoneNumber}
                  required
                  onChange={event => setPhoneNumber(event.target.value)}/>

        <input type="password" placeholder="password" value={password}
                  required
                  onChange={event => setPassword(event.target.value)}/>
        <input type="password" placeholder="repeat password" value={password2}
                  required
                  onChange={event => setPassword2(event.target.value)}/>
  
        <button onClick={registerSubmit}>create</button>
        <p className="message">Already registered? <a href="/login" >Sign In</a></p>
        </form> : <form className="register-form">
        <p className='name'>Register</p>
        <p className='error'>{error}</p>
        <input type="email" placeholder="Email" value={email}
                  required
                  onChange={event => setEmail(event.target.value)}/>
        <input type="password" placeholder="password" value={password}
                  required
                  onChange={event => setPassword(event.target.value)}/>
        <input type="password" placeholder="repeat password" value={password2}
                  required
                  onChange={event => setPassword2(event.target.value)}/>
  
        <button onClick={registerSubmit}>create</button>
        <p className="message">Already registered? <a href="/login" >Sign In</a></p>
        </form> }
        
      </div>
      </div>
      </div>
      
    )
  }

  
