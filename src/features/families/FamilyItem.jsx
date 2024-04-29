import React from "react";
import styled from "styled-components";
import Row from "../../ui/Row";
import { apiBaseURL, apiURL } from "../../services/apiRest";
import { NavLink, useNavigate } from "react-router-dom";

const SeeFamilyBtn = styled.a`
  display: inline-block;
  padding: 1.2rem 3rem;
  border-radius: 100rem;
  font-size: 1.6rem;
  transition: all 0.3s;
  position: absolute;
  cursor: pointer;
  bottom: 1rem;
  right: 1rem;
  background-image: -webkit-gradient(
    linear,
    left top,
    right bottom,
    from(var(--color-grey--2)),
    to(var(--color-grey--4))
  );
  transform: skewX(12deg);
  background-image: linear-gradient(
    to right bottom,
    var(--color-grey--2),
    var(--color-grey--4)
  );
  color: var(--color-grey--9);
  &:hover {
    transform: translateY(-2px) skewX(12deg);
    box-shadow: 0px 4px 1.2rem rgba(0, 0, 0, 0.2);
  }
`;

const Family = styled.div`
  width: 75%;
  margin: 0 auto;
  box-shadow: 0 3rem 6rem rgba(0, 0, 0, 0.1);
  /* background-color: rgba(255, 255, 255, 0.6); */
  background-image: -webkit-gradient(
    linear,
    left top,
    right bottom,
    from(#7ed56f),
    to(#28b485)
  );
  background-image: linear-gradient(to right bottom, #7ed56f, #28b485);
  border-radius: 3px;
  padding: 6rem;
  padding-left: 9rem;
  font-size: 1.6rem;
  transform: skewX(-12deg);
  position: relative;
  min-height: 28rem;
  &:hover img {
    transform: translateX(1rem) scale(1.4) !important;
    backface-visibility: hidden;
    filter: blur(0px) brightness(100%) !important;
  }
  &:hover figcaption {
    transform: translate(-50%, 20%);
    opacity: 0;
  }
`;

const imgStyle = {
  //
  height: "100%",
  transform: "translate(0rem) scale(1) ",
  filter: "blur(3px) brightness(80%)",
  transition: "all 0.3s ",
};
const FamilyText = styled.div`
  transform: skewX(12deg);
`;
const FamilyShape = styled.figure`
  width: 18rem;
  height: 18rem;
  float: left;
  transform: translateX(-4rem) skewX(12deg);
  position: relative;
  overflow: hidden;
  border-radius: 50%;

  -webkit-clip-path: circle(50% at 50% 50%);
  clip-path: circle(50% at 50% 50%);
  -webkit-shape-outside: circle(50% at 50% 50%);
  shape-outside: circle(50% at 50% 50%);
  border-radius: none;
`;
const FigCaption = styled.figcaption`
  position: absolute;
  top: 50%;
  left: 50%;

  opacity: 1;
  transform: translate(-50%, -50%);
  color: var(--color-grey--0);
  text-transform: uppercase;
  font-size: 1.7rem;
  text-align: center;
  transition: all 0.5s;
  backface-visibility: hidden;
`;
const StyledFamilyHeader = styled.div`
  margin-bottom: 2rem;
`;
export default function FamilyItem({ family }) {
  const navigate = useNavigate();
  const { name, description, image, _id: familyId } = family;
  console.log(familyId);
  const imgSource = image
    ? `${apiURL}/img/families/${image}`
    : "/default-family.jpg";
  return (
    <StyledFamilyHeader>
      <Family>
        <FamilyShape>
          <img style={imgStyle} crossOrigin="anonymous" src={imgSource} />
          <FigCaption>{name}</FigCaption>
        </FamilyShape>
        <FamilyText>
          <div className="heading-tertiary u-margin-bottom-small">
            I had the best week ever with my family
          </div>
          <p>{description}</p>
        </FamilyText>
        <SeeFamilyBtn onClick={() => navigate(`/family/${familyId}`)}>
          Details
        </SeeFamilyBtn>
      </Family>
    </StyledFamilyHeader>
  );
}
