import React from "react";
import styled from "styled-components";
import Card from "./components/Card.js";

const ThinnerCard = styled(Card)`
  width: 500px;
`;

export const App = () => {
  return (
    <>
      <Card
        headerText="Get ready for adventure!"
        a="about"
        b="trips"
        c="pricing"
        d="contact"
        picture="https://placekitten.com/640/360"
        coverPicture="https://placebear.com/640/360"
      />

      <Card
        a="about"
        b="trips"
        c="pricing"
        d="contact"
        coverPicture="https://loremflickr.com/640/360"
      />

      <ThinnerCard
        a="about"
        b="trips"
        c="pricing"
        d="contact"
        coverPicture="https://picsum.photos/640/360"
      />
    </>
  );
};
