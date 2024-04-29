import React from "react";
import RegisterForm from "../features/authentication/RegisterForm";
import styled from "styled-components";

const RegisterLayout = styled.main`
  min-height: 100vh;
  display: grid;

  padding: 2.4rem 6rem;
  background-image: -webkit-gradient(
    linear,
    left top,
    right bottom,
    from(#7ed56f),
    to(#28b485)
  );
  background-image: linear-gradient(to right bottom, #7ed56f, #28b485);
`;
export default function Register() {
  return (
    <RegisterLayout>
      <RegisterForm />
    </RegisterLayout>
  );
}
