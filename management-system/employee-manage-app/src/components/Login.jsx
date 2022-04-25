import { AuthContext } from "../Context/AuthContext";

import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
export const Login = () => {
  //  use reqres to log user in.
  const [data, setData] = useState([]);

  useEffect(() => {
    emp();
  }, []);
  async function emp() {
    let res = await fetch("http://localhost:8080/employee");
    let data = await res.json();
    setData(data);
  }

  const [user, setUser] = useState({});
  const nav = useNavigate();
  const { isAuth, toggleAuth } = useContext(AuthContext);
  function sendToken(e) {
    e.preventDefault();
    let a = false;
    data.map((e) => {
      if (e.username == user.username || e.password == user.password) {
        toggleAuth();
        nav(-2, { replace: true });
        a = true;
      }
    });
    if (a) {
      return;
    } else {
      alert("wrong email or password");
    }
  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  return (
    <form className='loginform' onSubmit={sendToken}>
      <input
        name='username'
        type='text'
        onChange={handleChange}
        placeholder='Enter username'
        className='login_username'
      />
      <input
        name='password'
        type='text'
        onChange={handleChange}
        placeholder='Enter password'
        className='login_password'
      />
      <input type='submit' value='SIGN IN' className='login_submit' />
    </form>
  );
};
