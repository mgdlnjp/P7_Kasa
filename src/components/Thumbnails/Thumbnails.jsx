import "../../components/Thumbnails/thumbnails.scss"

export default function Thumbnails({ image, title }) {//Renvoie les attributs dans Products
   return (
      <div className="thumb">
         <img src={image} alt="" className="thumb__img" />
         <div className="thumb__overlay"></div>
         <h2 className="thumb__title">{title}</h2>
      </div>
   )
}
