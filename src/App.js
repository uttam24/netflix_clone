import React,{useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import HomeScreen from './HomeScreen';
import {login, logout, selectUser} from './features/userSlice';
import { getAuth, onAuthStateChanged} from "firebase/auth";
import Login from './Login';


import './App.css';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(()=>{
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
       if (user) {
          dispatch(login({
            uid:user.uid,
            email:user.email
          }))
       } else {
          dispatch(logout);
       }
      });
    return unsubscribe;
  },[])

  return (
    <div className="App">
    {!user ? (<Login/>) : (<HomeScreen/>)}
    </div>
  )
}

export default App;
