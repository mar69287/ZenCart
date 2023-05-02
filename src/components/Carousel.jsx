import React, { useState, useEffect } from "react";
import { Center } from "@chakra-ui/react";
import img1 from "../images/clothes-male-model.jpg";
import img2 from "../images/women-model.jpg";
import img3 from "../images/jewelry-model.jpg";
import img4 from "../images/tv-model.jpg";

const images = [img1, img2, img3, img4];

const Carousel = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((currentImage + 1) % images.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [currentImage]);

  return (
    <Center height="20rem" marginY={'1rem'}>
      <img src={images[currentImage]} alt={`Carousel slide ${currentImage}`} style={{ width: "35%", height: "100%" }} />
    </Center>
  );
};

export default Carousel;
