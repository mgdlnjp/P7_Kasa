import { BrowserRouter, Routes, Route } from "react-router-dom";

import Card from "../pages/Card/Card";
import Home from "../pages/Home/Home";
import Error from "../pages/Error/Error";
import About from "../pages/About/About";
import LayoutBlank from "../layout/LayoutBlank";
import LayoutDefault from "../layout/LayoutDefault";

const Router = () => { //Affichage de la page d'acceuil classique ou Re-routage vers une page en cas d'erreur 
  return (
    <BrowserRouter>

      <Routes>
        <Route element={<LayoutDefault />}>
          <Route exact path="/" element={<Home />} />
          <Route path="/products/:id" element={<Card />} />
          <Route path="/about" element={<About />} />
        </Route>

        <Route element={<LayoutBlank />}> 
          <Route path="*" element={<Error />} />
          <Route path="/404" element={<Error />} />
        </Route>
      </Routes>

    </BrowserRouter>
  );
};

export default Router;
