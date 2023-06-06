import React, {useState, useEffect} from 'react'
import {  jwtInterceptor } from '../../../shared/jwtInterceptor'
import axios from 'axios'

export default function Users() {
    const [users, setUsers] = useState([])
    useEffect(() => {
    //    const test = axios.get("http://localhost:8000/api/users").then((response) => {
    //     setUsers(response.data);
    //   });

      jwtInterceptor
      .post("http://localhost:8000/exchange/orders/", {
          ticker: "TESTUSDT",
          quantity_usdt: 100,
     
      })
      .then((response) => {
        console.log(response.data);
        setUsers(response.data);
      });
      }, []);

      return (
        <div>
         
            {users.map((user) => (
         
                <div key={user.id}>
                  <div>
                    <p>{user.username}</p>
                    <p>Genre: {user.id}</p>
                  </div>
                </div>
            
            ))}
          
        </div>
      );
}
