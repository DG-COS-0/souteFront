import styled from "styled-components";



const HeadingSecondaryMain = styled.h2`
  font-size: 7.6rem;
  text-transform: uppercase;
  font-weight: 700;
  display: inline-block;
  background-image: linear-gradient(
    to right,
    var(--color-green--5),
    var(--color-green--8)
  );
  -webkit-background-clip: text;
  color: transparent;
  letter-spacing: 0.2rem;
  transition: all 0.2s;

  &:hover {
    transform: skewY(2deg) skewX(8deg) scale(1.1);
    text-shadow: 0.5rem 1rem 2rem rgba(0, 0, 0, 0.2);
  }
`;
export default HeadingSecondaryMain;
