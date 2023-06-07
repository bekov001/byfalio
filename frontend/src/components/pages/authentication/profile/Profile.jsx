import React, {useContext, useEffect} from 'react';

// import Header from '../../../layouts/Header';
// import Sidebar from '../../../layouts/Sidebar';
import '../../authentication/styles/profile_page.css';
import Sidebar from '../../../layouts/Trade/Sidebar';
import Header from '../../../layouts/Trade/Header/Header';
import AuthContext from '../../../../shared/AuthContext';
import jwtInterceptor from '../../../../shared/jwtInterceptor';
import { useState } from 'react';
import { BACKEND_URL } from '../../../../helpers';

export default function Profile() {
  const {logout}= useContext(AuthContext)
  const [kyc, setKyc] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [balance, setBalance] = useState('');

  useEffect(() => {
    //    const test = axios.get("http://localhost:8000/api/users").then((response) => {
    //     setUsers(response.data);
    //   });

      jwtInterceptor
      .get(BACKEND_URL + "/api/detail")
      .then((response) => {
        // setUsers(response.data);
        setUsername(response.data.username)
        setEmail(response.data.email);
        setPhone(response.data.phone_number);
        setKyc(response.data.kyc);

      });
      }, []);
  return (
    
    <div className="wrap">
        <Header></Header>
        <div className="main">
            <Sidebar></Sidebar>
          <div className='card'>
          <img
            src="https://cdn1.iconfinder.com/data/icons/user-pictures/100/unknown-512.png"
            alt="avatar"
            className="rounded-circle"
            style={{ width: '150px' }}
            fluid />
            <p>{username}</p>
            <p>Email: {email ? email : "-"}</p>
            <p>Phone: {phone ? phone : "-"}</p>
            <p>Verification: {!kyc ? 'not passed' : 'passed'}</p>
            <button className='logout_btn' onClick={() => logout()}>Выйти</button>
          </div>
            
          </div>  
      </div>
      

  );
}

