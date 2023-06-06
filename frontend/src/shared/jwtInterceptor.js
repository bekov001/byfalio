import axios from "axios";
 
export const jwtInterceptor = axios.create();

// export const setAuthToken = token => {
//  if (token) {
//    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
//  }
//  else
//       delete axios.defaults.headers.common["Authorization"];
// }

// export function getApiData(url) {
//    let tokensData = JSON.parse(localStorage.getItem("tokens"));
//     setAuthToken(tokensData.access_token);
//     axios.get(url).then((resp) => {
//        console.log('a', resp.data)
        
//       return resp.data;
//       }
//        )
// }
 
jwtInterceptor.interceptors.request.use((config) => {
  console.log(config);
let tokensData = JSON.parse(localStorage.getItem("tokens"));
  config.headers["Authorization"] = `Bearer ${tokensData.access_token}`;
 return config;
 });


 jwtInterceptor.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (error.response.status === 401) {
      const authData = JSON.parse(localStorage.getItem("tokens"));
      const payload = {
        // access_token: authData.access_token,
        refresh: authData.refresh_token,
      };
      
      let apiResponse = await axios.post(
        "http://localhost:8000/api/refresh/",
        payload
      );
      // console.log(apiResponse)
      localStorage.setItem("tokens", JSON.stringify(
        {
          access_token: apiResponse.data["access"],
          refresh_token: apiResponse.data["refresh"]
        }
        ));
      error.config.headers[
        "Authorization"
      ] = `bearer ${apiResponse.data.access}`;
      return axios(error.config);
    } else {
      return Promise.reject(error);
    }
  }
);

export default jwtInterceptor;