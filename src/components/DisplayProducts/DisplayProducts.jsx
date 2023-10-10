import { Link } from 'react-router-dom'
import products from '../../assets/data/logements.json'
import Thumbnails from '../Thumbnails/Thumbnails'

import "../../components/DisplayProducts/displayProducts.scss"

export default function DisplayProducts() {
   return (
      <section className="home__products">
         {products.map((product) => {
            return (
               <article key={product.id} className="articles">
                  <Link to={`/products/${product.id}`}>
                     <Thumbnails image={product.cover} title={product.title} />
                  </Link>
               </article>
            )
         })}
      </section>
   )
}
