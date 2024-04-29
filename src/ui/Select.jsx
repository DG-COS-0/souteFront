import styled from "styled-components";

const StyledSelect = styled.select`
  font-size: 1.4rem;
  padding: 0.8rem 1.2rem;
  border: 1px solid
    ${(props) =>
      props.type === "white" ? "var(--color-grey--1)" : "var(--color-grey--4"};
  border-radius: 2px;
  background-color: var(--color-gray--0);
  font-weight: 500;
  box-shadow: var(--shadow-sm);
`;

function Select({ options, value, onChange, ...props }) {
  return (
    <StyledSelect value={value} onChange={onChange} {...props}>
      {options.map((option) => (
        <option value={option._id} key={option._id}>
          {`${option.surName} ${option.firstNames.toString()}`}
        </option>
      ))}
    </StyledSelect>
  );
}

export default Select;
