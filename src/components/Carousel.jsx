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
    <Center marginY="1rem">
      <Box w={["90%", "80%", "70%"]}>
        <Image
          src={images[currentImage]}
          alt={`Carousel slide ${currentImage}`}
          objectFit="cover"
          w="100%"
          h={["10rem", "12rem", "16rem", "20rem"]}
          borderRadius="md"
          boxShadow="md"
        />
      </Box>
    </Center>
  );
};

export default Carousel;
