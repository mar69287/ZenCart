import { Box, Center, Image } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
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
    <Center marginY="1rem" h={["12rem", "14rem", "20rem", "24rem"]}>
        <Image
          src={images[currentImage]}
          alt={`Carousel slide ${currentImage}`}
          w={["90%", "75%", "60%"]}
          height='100%'
          borderRadius="md"
          boxShadow="md"
        />
    </Center>
  );
};

export default Carousel;
