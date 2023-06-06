import axios from "axios";
import { createContext, useState } from "react";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import jwtInterceptor from "./jwtInterceptor";
export const AuthContext = createContext();
 
export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    if (localStorage.getItem("tokens")) {
      let tokens = JSON.parse(localStorage.getItem("tokens"));
      return jwt_decode(tokens.access_token);
    }
    return null;
  });
 
  const navigate = useNavigate();
 
  const login = async (payload) => {
    const apiResponse = await axios.post(
      "http://localhost:8000/api/login/",
      payload
    );
    console.log(apiResponse.data);
    if (apiResponse.data.access_token){
        localStorage.setItem("tokens",  JSON.stringify(apiResponse.data));
        setUser(jwt_decode(apiResponse.data.access_token));
        navigate("/trade");
    } else {
      return apiResponse.data;
    }
    
  };


  const register = async (payload) => {
    const apiResponse = await axios.post(
      "http://localhost:8000/api/register/",
      payload
    ).then(response => {
      let loginData = {
        login: payload["email"] != null ? payload["email"] : payload["phone_number"],
        password: payload.password
      }
      login(loginData)
    }).catch(error => {
      return error.response
    });
    // console.log(apiResponse.data);
    // if (apiResponse.data.email && apiResponse.data.phone_number){
    //     // localStorage.setItem("tokens",  JSON.stringify(apiResponse.data));
    //     // setUser(jwt_decode(apiResponse.data.access_token));
    //     // navigate("/");
    // }
    // else {
    //   return {'error': apiResponse.data}
    // }
    return apiResponse;
    
  };

  const logout = async () => {
    // invoke the logout API call, for our NestJS API no logout API
    const apiResponse = jwtInterceptor
    .post(
      "http://localhost:8000/api/logout/",
      
        // localStorage.getItem("tokens")
      
    )
    localStorage.removeItem("tokens");
    setUser(null);
    navigate("/");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};
 

export default AuthContext;