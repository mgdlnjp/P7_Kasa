import React from 'react'
import logo from '../../assets/logo.svg'
import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import '../../components/Header/header.scss';

export default function Header() {
   const location = useLocation()//URL affichée dans la barra d'adresse
   const [activePage, setActivePage] = useState(location.pathname)//Valide la fonction suivente
   useEffect(() => {//Active le nom de la page qui va s'afficher
      setActivePage(location.pathname)
   }, [location])

   const navigate = useNavigate()//Va retourner le lien d'origine (pas de manière dynamique)
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
