import "../../components/Tags/tags.scss"


export default function Tags({ getTag }) { //Renvoie à l'attibut Tag affiché dans Card
   return (
      <div className="tag">
         <p className="tag__text">{getTag}</p>
      </div>
   )
}
