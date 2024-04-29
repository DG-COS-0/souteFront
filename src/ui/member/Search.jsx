import { HiMagnifyingGlass } from "react-icons/hi2";

const SearchBtn = styled.button`
  padding: 1.5rem 4rem;
  font-size: 1.5rem;
  font-weight: 600;

  svg {
    height: 2.25rem;
    width: 2.25rem;
    fill: currentColor;
  }
  font-weight: 600;
  font-family: inherit;
  background-image: -webkit-gradient(
    linear,
    left top,
    right bottom,
    from(#7ed56f),
    to(#28b485)
  );
  background-image: linear-gradient(to right bottom, #7ed56f, #28b485);
  border-radius: 100rem;
  border: none;
  cursor: pointer;
  height: 4.5rem;
  width: 15rem;
  // margin-left: auto;
  transition: all 0.2s;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    transform: scale(1.07);
  }

  &:focus {
    outline: none;
  }

  svg {
    height: 2.5rem;
    width: 2.5rem;
    fill: #fff;
  }
`;
const StyledSearch = styled.form`
  background-color: #fff;
  border-radius: 10rem;
  display: flex;
  align-items: center;
  padding-left: 3rem;
  transition: all 0.3s;

  &:focus-within {
    transform: translateY(-2px);
    box-shadow: 0 0.7rem 3rem rgba(0, 0, 0, 0.08);
  }
`;
const StyledSearchInput = styled.input`
  border: none;
  background: none;
  font-family: inherit;
  color: inherit;
  font-size: 1.7rem;
  width: 30rem;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: var(--color-grey--3);
  }

  /* @media only screen and (max-width: $bp-medium) {
    width: auto;

    &::placeholder {
      color: white;
    }
  } */
`;
import React from "react";
import styled from "styled-components";

export default function Search() {
  return (
    <StyledSearch>
      <StyledSearchInput placeholder="Rechercher parmi les familles de l'app" />
      <SearchBtn>
        <HiMagnifyingGlass />
        <span>Rechercher</span>
      </SearchBtn>
    </StyledSearch>
  );
}
