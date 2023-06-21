import React from 'react';

import { BrowserRouter as Router, Routes, Route, HashRouter}
    from 'react-router-dom';
import TradeRoom from './components/pages/Trade/Room/Home';
import Modals from './components/pages/Modals';
import Landing from './components/pages/Landing/Home';
import Login from './components/pages/authentication/Login';
import { AuthContextProvider } from "./shared/AuthContext";
import Users from './components/pages/authentication/Users'
import ProtectedRoute from './shared/ProtectedRoute';
import Register from './components/pages/authentication/Register';
import Profile from './components/pages/authentication/profile/Profile';
// import Test from './components/pages/Trade/Room/TokenChart/Test';


function Main() {

    const appHeight = () => {
        const doc = document.documentElement
        doc.style.setProperty('--app-height', `${window.innerHeight}px`)
    }
    window.addEventListener('resize', appHeight)
    appHeight()

    
return (
    // <Router>
    // <Routes>
       
    //     <Route exact path='/trade' element={<TradeRoom />} />
    //     <Route exact path='/modals' element={<Modals />} />
    // </Routes>
    // </Router>

<Router>
<AuthContextProvider>
<Routes>
<Route exact path='/' element={
<ProtectedRoute accessBy="non-authenticated">
<Landing />
</ProtectedRoute>
} />
 <Route exact path='/trade' element={<TradeRoom />} />
 <Route path='/login' element={
 <ProtectedRoute accessBy="non-authenticated">
           <Login />
         </ProtectedRoute>}>
 
 </Route>
 <Route path='/register' element={
 <ProtectedRoute accessBy="non-authenticated">
           <Register />
         </ProtectedRoute>}>
 
 </Route>
 <Route path='/profile' element={
 <ProtectedRoute accessBy="authenticated">
           <Profile />
         </ProtectedRoute>}>
 
 </Route>
 {/* <Route exact path='/account' element={<Login/>} /> */}
 <Route exact path='/modals' element={<Modals />} />
 <Route exact path='/users' element={<Users />} />
 {/* <Route exact path='/test' element={<Test />} /> */}
</Routes>
 </AuthContextProvider>
</Router>
);
}
  
export default Main;