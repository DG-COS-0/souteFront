import React from "react";
import styled from "styled-components";

const StyledFormRow = styled.div`
  &:not(:last-child) {
    margin-bottom: 2rem;
  }

  &__input {
    font-size: 1.5rem;
    font-family: inherit;
    color: inherit;
    padding: 1.5rem 2rem;
    border-radius: 2px;
    background-color: rgba(255, 255, 255, 0.5);
    border: none;
    border-bottom: 3px solid transparent;
    width: 90%;
    display: block;
    transition: all 0.3s;

    &:focus {
      outline: none;
      box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.1);
      border-bottom: 3px solid var(--color-green--5);
    }

    &:focus:invalid {
      border-bottom: 3px solid var(--color-red--8);
    }

    &::-webkit-input-placeholder {
      color: $color-grey-dark-2;
    }
  }

  &__label {
  }

  &__input:placeholder-shown + &__label {
    opacity: 0;
    visibility: hidden;
    transform: translateY(-4rem);
  }
`;
const Label = styled.label`
  font-size: 1.2rem;
  font-weight: 700;
  margin-left: 2rem;
  margin-top: 0.7rem;
  display: block;
  transition: all 0.3s;
`;
const Error = styled.span`
  font-size: 1.4rem;
  color: var(--color-red-700);
`;
export default function RowVertical({ label, error, children }) {
  return (
    <div>
      <StyledFormRow>
        {label && <Label htmlFor={children.props.id}>{label}</Label>}
        {children}
        {error && <Error>{error}</Error>}
      </StyledFormRow>
    </div>
  );
}
