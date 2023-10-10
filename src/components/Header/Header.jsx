import React from 'react'
import logo from '../../assets/logo.svg'
import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import '../../components/Header/header.scss';

export default function Navbar() {
   const location = useLocation()
   const [activePage, setActivePage] = useState(location.pathname)
   useEffect(() => {
      setActivePage(location.pathname)
   }, [location])

   const navigate = useNavigate()
   const goToHome = () => {
      navigate('/')
   }
   return (
      <header className="header">
         <div className="logo__container">
            <img onClick={goToHome} src={logo} alt="Kasa" className="logo" />
         </div>
         <nav className="nav">
            <ul className="nav__bar">
               <li
                  className={
                     activePage === '/'
                        ? 'nav__link nav__link--active'
                        : 'nav__link'
                  }
               >
                  <a href="/">Accueil</a>
               </li>
               <li
                  className={
                     activePage === '/About'
                        ? 'nav__link nav__link--active'
                        : 'nav__link'
                  }
               >
                  <a href="/About">A Propos</a>
               </li>
            </ul>
         </nav>
      </header>
   )
}
