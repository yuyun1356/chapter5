import React, { useState } from 'react'
import './navbar.scss'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useUserAuth } from '../context/UserAuthContext';

const Navbar = () => {

  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate()

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  const searchFilm = ((keyword) => {
    navigate('/search', { state: { keyword } });
  });

  const { pathname } = useLocation();
  console.log(pathname)

  const{logOut} = useUserAuth()
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="navbar__container">
        <div className="logo">
          <Link to='/home' style={{textDecoration: 'none', color: 'var(--color3)'}}>WatchMovies</Link>
        </div>
        <form>
          <input type="text" placeholder='search movie...'
          onChange={(e) => searchFilm(e.target.value)}/>
        </form>
        {
          (pathname === '/home')
          ?
          <button type='submit' onClick={handleLogout}>Logout</button>
          :
          ""
        }
      </div>
    </div>
  )

  
}

export default Navbar