import { useState, useEffect } from "react";
import { FiChevronRight } from "react-icons/fi";
import { FiChevronLeft } from "react-icons/fi";

import "../../components/Carousel/carousel.scss";

export default function Carousel({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % pictures.length); //Enclenche le goToNext apres 10 sec
    }, 10000);
    return () => clearInterval(interval);
  }, [currentIndex, pictures]);

  const goToPrev = () => {
    setCurrentIndex((currentIndex - 1 + pictures.length) % pictures.length); //Passe à la position précédente par rapport à sa place dans la liste des images du JSON 
  }; //Le + pictures.length permet d'éviter la position 0 de la liste

  const goToNext = () => {
    setCurrentIndex((currentIndex + 1) % pictures.length); //Passe à la position suivante par rapport à sa place dans la liste des images du JSON
  };

  return (
    <div className="carousel">
      {pictures.length > 1 && (
        <>
          <button
            className="carousel__arrow carousel__arrow--prev"
            onClick={goToPrev}
          >
            <FiChevronLeft />
          </button>
          <span className="carousel__index">
            {currentIndex + 1}/{pictures.length}
          </span>
          <button
            className="carousel__arrow carousel__arrow--next"
            onClick={goToNext}
          >
            <FiChevronRight />
          </button>
        </>
      )}
      <img src={pictures[currentIndex]} alt={"photo" + currentIndex} />
    </div>
  );
}
