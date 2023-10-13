import footerLogo from '../../assets/logo.svg'

import "../../components/Footer/footer.scss"

export default function Footer() {
   const effectiveYear = new Date().getFullYear() //Affichage de l'année en cours (évite la mise à jour/modification de la page juste pour le footer)
   return (
      <footer className="footer">
         <img src={footerLogo} alt="logo" className="footer__logo"></img>
         <p className="footer__text">
            ©{effectiveYear} Kasa. All rights reserved
         </p>
      </footer>
   )
}
