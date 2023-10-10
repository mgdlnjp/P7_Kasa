import { useParams } from 'react-router-dom'
import { Navigate } from "react-router-dom";
import products from '../../../assets/data/logements.json'
import Rating from '../../../components/Rating/Rating'
import Host from '../../../components/Host/Host'
import Dropdown from '../../../components/Dropdown/Dropdown'
import Tags from '../../../components/Tags/Tags'
import Carousel from '../../../components/Carousel/Carousel'

import "../Card/card.scss"; 

export default function Card() {
   const list = JSON.stringify(products)
   const { id } = useParams()
   const parsedList = JSON.parse(list)
   const selectedItem = parsedList.find((item) => item.id === id)

   if (!selectedItem) {
      return <Navigate replace to="/404" />
   }
   const pictures = selectedItem.pictures
   return (
      <div className="card">
         <Carousel pictures={pictures} />
         <div className="details">
            <div className="prod">
               <h1 className="prod__title">{selectedItem.title} </h1>
               <h2 className="prod__location">{selectedItem.location}</h2>
               <div className="prod__tags">
                  {selectedItem.tags.map((tag, index) => (
                     <Tags key={index} getTag={tag} />
                  ))}
               </div>
            </div>
            <div className="provider">
               <Rating score={selectedItem.rating} />
               <Host host={selectedItem.host} />
            </div>
         </div>
         <div className="drops">
            <Dropdown
               key={selectedItem.id}
               title="Description"
               description={selectedItem.description}
            />
            <Dropdown
               title="Équipements"
               equipments={selectedItem.equipments}
            />
         </div>
      </div>
   )
}
