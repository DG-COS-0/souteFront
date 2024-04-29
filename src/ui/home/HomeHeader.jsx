import React from "react";
import { NavLink } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import NavBarHome from "./NavBarHome";
import Btn from "../Btn";

const moveToRight = keyframes`
  0% {
       transform: translateX(10rem);
       opacity: 0;
     }
     80% {
       transform: translateX(-2rem);
       opacity: 1;
     }
     100% {
       transform: translateX(0);
     }
`;

const moveToLeft = keyframes`
   0% {
     transform: translateX(-10rem);
     opacity: 0;
   }
   80% {
     transform: translateX(2rem);
     opacity: 1;
   }
   100% {
     transform: translateX(0);
   }
`;

const HeadingPrimary = styled.h1`
  text-transform: uppercase;
  text-align: center;
  color: var(--color-green--1);
  backface-visibility: hidden;
  & span.headingMain {
    display: block;
    font-size: 9.2rem;
    letter-spacing: 3rem;
    font-weight: 400;
    animation-name: ${moveToLeft};
    animation-duration: 2s;
    animation-timing-function: ease-out;
  }

  & span.headingSub {
    display: block;
    font-size: 2.8rem;
    font-weight: 700;
    letter-spacing: 1.2rem;
    animation: ${moveToRight} 2s ease-out;
  }
`;

const StyledHeader = styled.header`
  position: relative;
  height: 95vh;
  background-size: cover;
  background-position: top;
  background-image: linear-gradient(
      to right bottom,
      rgba(45, 212, 191, 0.8),
      rgba(15, 118, 110, 0.8)
    ),
    url("/hero.jpg");
  clip-path: polygon(0 0, 100% 0, 100% 80%, 0 100%);
`;
const HeaderTextBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const HeaderLogoBox = styled.div`
  position: absolute;
  top: 4rem;
  left: 4rem;
`;

export default function HomeHeader() {
  return (
    <StyledHeader>
      <NavBarHome />
      <HeaderLogoBox>
        <img src="/assets/react.svg" alt="logo app" />
      </HeaderLogoBox>
      <HeaderTextBox>
        <HeadingPrimary>
          <span className="headingMain">Friends</span>
          <span className="headingSub">Where life commes to play</span>
        </HeadingPrimary>
      </HeaderTextBox>
      <Btn positioned={"true"} animated={"true"} to="/maison">
        Nous devouvrir
      </Btn>
    </StyledHeader>
  );
}
