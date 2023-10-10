//function to login on a website

import "../../components/Tags/tags.scss"


export default function Tags({ getTag }) {
   return (
      <div className="tag">
         <p className="tag__text">{getTag}</p>
      </div>
   )
}
