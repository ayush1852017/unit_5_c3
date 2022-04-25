import { Link } from "react-router-dom";
import { useState } from "react";
export const Navbar = () => {
  const [login, setLogin] = useState(false);
  return (
    <div className='navbar'>
      <Link className='nav-home' to='/' style={{ margin: "10px" }}>
        Home
      </Link>
      <Link className='nav-list' to='/employee' style={{ margin: "10px" }}>
        Employee List
      </Link>
      <Link className='nav-admin' to='/admin' style={{ margin: "10px" }}>
        Admin
      </Link>
      {/* Show Either logout or login based on auth context. DO NOT show both */}
      {login ? (
        <Link className='nav-logout' to='/logout' style={{ margin: "10px" }}>
          Logout
        </Link>
      ) : (
        <Link className='nav-login' to='/login'>
          Login
        </Link>
      )}
    </div>
  );
};
