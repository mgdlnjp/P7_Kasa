import { useState } from 'react'
import { FiChevronUp } from 'react-icons/fi'
import { FiChevronDown } from 'react-icons/fi'

import "../../components/Dropdown/dropdown.scss"

export default function Dropdown(props) {
   const [isOpen, setIsOpen] = useState(false) //Appelle la condition de fermeture du dropdown au départ par utilisation du HOOK useState

   return (
      <div className="dropdown" key={props.id}>
         <button
            type="button"
            className="dropdown__button"
            onClick={() => setIsOpen(!isOpen)} //Appelle la condition d'ouverture du dropdown si celui est fermé
         >
            <h3 className="dropdown__button__title">{props.title}</h3>
            <span className="dropdown__button__chevron">
               {isOpen ? <FiChevronUp /> : <FiChevronDown />} {/* Appelle l'affichage de l'icone fermé si le dropdown est ouvert et vice versa */}
            </span>
         </button>

         <div
            className={
               isOpen ? 'dropdown__infos' : 'dropdown__infos dropdown__hidden'
            }>

            {Array.isArray(props.equipments) ? (
               <ul className="collapse__list">
                  {props.equipments.map((equipment, index) => (
                     <li key={index} className="collapse__list-element">
                        {equipment}
                     </li>
                  ))}
               </ul>
            ) : (
               <p>{props.description}</p>
            )}

         </div>
      </div>
   )
}
