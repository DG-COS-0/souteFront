import React from "react";
import { useFamily } from "./useFamily";
import Spinner from "../../ui/Spinner";
import HeadingSecondaryMain from "../../ui/HeadingSecondaryMain";
import styled, { css } from "styled-components";
import { apiURL } from "../../services/apiRest";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import AddRequest from "./AddRequest";

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
  corleone: css`
    background-image: -webkit-gradient(
      linear,
      left top,
      right bottom,
      from(#fbbf24),
      to(#d97706)
    );
    background-image: linear-gradient(to right bottom, #fbbf24, #d97706);
    color: var(--color-grey--1);
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0px 4px 1.2rem rgba(0, 0, 0, 0.2);
    }
  `,
};
const StyledImgBtn = styled(NavLink)`
  ${(props) => variation[props.variation]}
  display: inline-block;
  padding: 1.2rem 3rem;
  border-radius: 100rem;
  font-size: 1.6rem;
  transition: all 0.3s;
`;

const StyledFamilyDetails = styled.div``;
const FamilyDetailsBox = styled.div`
  border-radius: 12px;
  padding: 1.2rem 1.2rem;
  display: grid;
  grid-template-columns: 1fr 2fr;
  background-image: -webkit-gradient(
    linear,
    left top,
    right bottom,
    from(#7ed56f),
    to(#28b485)
  );
  background-image: linear-gradient(to right bottom, #7ed56f, #28b485);
`;

const familyImgStyle = {
  borderRadius: "7px",
};
const FamilyImgBox = styled.div`
  position: relative;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const FamilyBtnBox = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  padding: 1px 5.2rem;
  /* width: 90%; */
  bottom: 5%;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
`;
StyledImgBtn.defaultProps = {
  variation: "simple",
};
export default function FamilyDetails() {
  const { family, isLoading } = useFamily();

  if (isLoading) return <Spinner />;

  const { id, name, image } = family.data.data;
  const imgSource = image
    ? `${apiURL}/img/families/${image}`
    : "/default-family.jpg";

  return (
    <StyledFamilyDetails>
      <div className="u-center-text u-margin-bottom-medium">
        <HeadingSecondaryMain> {name} </HeadingSecondaryMain>
      </div>
      <FamilyDetailsBox>
        <FamilyImgBox>
          <img style={familyImgStyle} crossOrigin="anonymous" src={imgSource} />
          <FamilyBtnBox>
            <StyledImgBtn variation="corleone">Voir les Membres</StyledImgBtn>
            <AddRequest>
              <StyledImgBtn variation="primary">Rejoindre</StyledImgBtn>
            </AddRequest>
          </FamilyBtnBox>
        </FamilyImgBox>
      </FamilyDetailsBox>
    </StyledFamilyDetails>
  );
}
