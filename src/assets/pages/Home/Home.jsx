import Banner from "../../../components/Banner/Banner";
import Products from "../../../components/Products/Products";
import image from "./home-banner.png";

import "./home.scss";

const text = "Chez vous, partout et ailleurs";
export default function Home() {
  return (
    <div className="home">
      <Banner title={text} imageUrl={image} />
      <Products />
    </div>
  );
}
