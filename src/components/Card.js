import React from "react";
import styled from "styled-components";

const Header = styled.header`
  margin: 20px;
  height: 300px;
  background-color: #151414;
  margin-bottom: 300px;
  `;

const Navigation = styled.nav`
  display: flex;
  flex-direction:column;
  align-items:end;
  padding-top: 15px;
  padding-right: 10px;
  
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: flex-end;
  }
`;

const Anchor = styled.a`
  font-size: 18px;
  font-weight: 600;
  font-family: "Roboto", sans-serif;
  margin-right: 5px;
  padding-bottom: 5px;
  margin-right: 20px;
  z-index: 1;
  color: orange;

  @media (min-width: 550px) {
    font-weight: 700;
    font-size: 20px;
    padding-bottom: 10px;
  }
  @media (min-width: 768px) {
    font-size: 22px;
    color: #f5f5f5;
  }
`;

const HeadingOne = styled.h1`
  font-family: "Times New Roman", Times, serif;
  font-size: 35px;
  position: absolute;
  z-index: 1;
  left: 70px;
  top: 145px;
  font-style: normal;
  font-weight: bold;
  text-shadow: 0px 1.5px 4px #fff5d1;
  color: white;

  @media (min-width: 550px) {
    top: 190px;
    font-size: 40px;
    width: 400px;
  }
`;

const Bubble = styled.div`
  position: absolute;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  top: 120px;
  left: 80px;
  background-color: #dd8723;
`;

  const PictureFrame = styled.div`
  width:100px;
  height: 100px;
  border-radius: 50%;
  position:absolute;
  top:25px;
  left:25px;
  background-position: center; /* Center the image */
  background-size: cover; /* Resize the background image to cover the entire container */
  background-image: url(${(props)=> props.url});
  `;

const CoverImage = styled.img`
width:100%;

`;




const Card= (props) => {
  const { headerText, a, b, c, d, picture, coverPicture, className } = props;

  return (
    <Header className={className}>
    <PictureFrame url={picture}></PictureFrame>

      <Navigation>
        <Anchor>{a}</Anchor>
        <Anchor>{b}</Anchor>
        <Anchor>{c}</Anchor>
        <Anchor>{d}</Anchor>
      </Navigation>

      <HeadingOne>{headerText}</HeadingOne>

      <div>
        <Bubble></Bubble>
      </div>

      <CoverImage src={coverPicture} />
      

    </Header>
  );
};
export default Card;
