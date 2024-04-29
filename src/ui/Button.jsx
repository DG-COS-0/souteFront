import styled, { css } from "styled-components";

const sizes = {
  small: css`
    font-size: 1.2rem;
    padding: 0.4rem 0.8rem;
    text-transform: uppercase;
    font-weight: 600;
    text-align: center;
  `,
  medium: css`
    font-size: 1.4rem;
    padding: 1.2rem 1.6rem;
    font-weight: 500;
  `,
  large: css`
    font-size: 1.6rem;
    padding: 1.2rem 2.4rem;
    font-weight: 500;
  `,
};

const variations = {
  primary: css`
    color: var(--color-grey--1);
    background-color: var(--color-green--5);

    &:hover {
      background-color: var(--color-green--7);
    }
  `,
  secondary: css`
    color: var(--color-grey--8);
    background: var(--color-grey--0);
    border: 1px solid var(--color-grey--2);

    &:hover {
      background-color: var(--color-grey--2);
    }
  `,
  danger: css`
    color: var(--color-red--1);
    background-color: var(--color-red--7);

    &:hover {
      background-color: var(--color-red--8);
    }
  `,
};

const Button = styled.button`
  border: none;
  border-radius: 2px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);
  transition: all 0.3s;
  ${(props) => sizes[props.size]}
  ${(props) => variations[props.variation]}
`;

Button.defaultProps = {
  variation: "primary",
  size: "medium",
};

export default Button;
