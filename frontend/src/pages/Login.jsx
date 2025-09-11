import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Login from "../components/Login/Login.jsx";

const LoginPage = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state) => state.user);

  useEffect(() => {
    if(isAuthenticated === true){
      navigate("/");
      window.location.reload();
    }
  }, [])
  
  return (
    <div>
      <h1>hey</h1>
        <Login />
    </div>
  )
}

export default LoginPage;