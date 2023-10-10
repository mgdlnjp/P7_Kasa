import { Link } from "react-router-dom";
import logements from "../../assets/data/logements.json";
import Thumbnails from "../Thumbnails/Thumbnails";

import "./products.scss";

export default function Products() {
  return (
    <section className="home__products">
      {logements.map((logement) => {
        return (
          <article key={logement.id} className="articles">
            <Link to={`/products/${logement.id}`}>
              <Thumbnails image={logement.cover} title={logement.title} />
            </Link>
          </article>
        );
      })}
    </section>
  );
}
