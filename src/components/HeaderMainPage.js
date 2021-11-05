import React from "react";
import styled from "styled-components";

const Header = styled.header`
  width: 100%;
  position: fixed;
  height: 290px;
  background-color: #151414;

  @media (min-width: 550px) {
    height: 350px;
  }

  @media (min-width: 768px) {
    height: 550px;
  }
`;

const Navigation = styled.nav`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  color: white;
  padding-bottom: 10px;
  height: 290px;

  @media (min-width: 550px) {
    padding-top: 15px;
    padding-right: 10px;
    flex-direction: column;
    justify-content: flex-start;
  }
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
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
  width: 290px;
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
  @media (min-width: 768px) {
    font-size: 85px;
    line-height: 122.2px;
    width: 684px;
    height: 243px;
    left: 170px;
    top: 200px;
  }
`;

const Bubble = styled.div`
  position: absolute;
  width: 250px;
  height: 250px;
  border-radius: 50%;
  top: -50px;
  left: 50px;
  background-color: #dd8723;

  @media (min-width: 550px) {
    width: 300px;
    height: 300px;
  }

  @media (min-width: 768px) {
    width: 500px;
    height: 500px;
    border-radius: 50%;
    top: -50px;
    left: 150px;
  }
`;

const HeaderMainPage = (props) => {
  const { headerText, a, b, c, d } = props;

  return (
    <Header>
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
    </Header>
  );
};
export default HeaderMainPage;
