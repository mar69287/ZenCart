import { Box, Center, Image } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import img1 from "../images/model1.jpeg";
import img2 from "../images/model2.jpeg";
import img3 from "../images/model3.jpeg";

const images = [img1, img2, img3];

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
          w={["90%", "90%", "80%", "50%"]}
          height='100%'
          borderRadius="md"
          boxShadow="md"
        />
    </Center>
  );
};

export default Carousel;
