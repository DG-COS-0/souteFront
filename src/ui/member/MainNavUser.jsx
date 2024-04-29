import React from "react";
import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";

const variation = {
  primary: css`
    background-image: -webkit-gradient(
      linear,
      left top,
      right bottom,
      from(#7ed56f),
      to(#28b485)
    );
    background-image: linear-gradient(to right bottom, #7ed56f, #28b485);
    color: var(--color-grey--1);
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0px 4px 1.2rem rgba(0, 0, 0, 0.2);
    }
  `,
  simple: css`
    background-color: var(--color-grey--1);
    &:hover {
      background-color: var(--color-green--4);
      transform: translateY(-2px);
      box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
    }
  `,
};
const StyledNavEl = styled(NavLink)`
  ${(props) => variation[props.variation]}
  display: inline-block;
  padding: 1.2rem 3rem;
  border-radius: 100rem;
  font-size: 1.6rem;
  transition: all 0.3s;
`;
const NavBar = styled.nav`
  display: flex;
`;
const StyledNavList = styled.ul`
  display: flex;
  gap: 2rem;
  backface-visibility: hidden;
`;
StyledNavEl.defaultProps = {
  variation: "simple",
};
export default function MainNavUser() {
  return (
    <NavBar>
      <StyledNavList>
        <StyledNavEl to="myfamilies">My Familles</StyledNavEl>
        <StyledNavEl> Membres</StyledNavEl>
        <StyledNavEl to="requests"> Requetes </StyledNavEl>
        <StyledNavEl variation="primary">Mon Compte</StyledNavEl>
      </StyledNavList>
    </NavBar>
  );
}
