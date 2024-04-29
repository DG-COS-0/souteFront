import { NavLink } from "react-router-dom";
import styled, { css, keyframes } from "styled-components";
import PropTypes from "prop-types";
const moveToTop = keyframes`
  0% {
     transform: translate(-50%, 10rem);
     opacity: 0;
   }
   100% {
     transform: translate(-50%, 0);
     opacity: 1;
   }
`;
const variations = {
  primary: css`
    color: var(--color-grey--8);
    background-color: var(--color-grey--1);

    &::after {
      background-color: rgba(255, 255, 255, 0.8);
    }
  `,
  secondary: css`
    color: var(--color-grey--0);
    background-color: var(--color-green--6);
    &::after {
      background-color: rgba(22, 163, 74, 0.8);
    }
  `,
  tertiary: css`
    color: var(--color-red--0);
    background-color: var(--color-red--6);
    &::after {
      background-color: rgba(225, 29, 72, 0.8);
    }
  `,
};
const animated = css`
  animation: ${moveToTop} 0.9s ease-in 2s;
  animation-fill-mode: backwards;
`;
const positioned = css`
  position: absolute;
  left: 50%;
  bottom: 12rem;
  transform: translateX(-50%);
`;
const Btn = styled(NavLink)`
  text-transform: uppercase;

  &:link,
  &:visited {
    cursor: pointer;
    padding: 1.4rem 3.2rem;
    border-radius: 10rem;
    text-decoration: none;

    box-shadow: rgba(0, 0, 0, 0.2) 0px 1.4rem 0.6rem;
    transition: all 0.2s ease-in;
  }
  &::after {
    content: " ";
    display: inline-block;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    border-radius: 10rem;
    z-index: -1;
    transition: all 0.3s ease-in;
  }
  &:active {
    box-shadow: rgba(0, 0, 0, 0.25) 0px 0.6rem 0.3rem;
  }
  &:hover::after {
    transform: scale(1.5);
    opacity: 0;
  }
  ${(props) => variations[props.variations]}
  ${(props) => props.animated && animated}
  ${(props) => props.positioned && positioned}
`;
// Btn.propTypes = {
//   variations: PropTypes.string,
//   animated: PropTypes.bool,
//   positioned: PropTypes.bool,
// };
Btn.defaultProps = {
  variations: "primary",
  animated: "",
  positioned: "",
};
export default Btn;
