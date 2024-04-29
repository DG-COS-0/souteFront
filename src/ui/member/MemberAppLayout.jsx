import React from "react";
import { Outlet } from "react-router-dom";
import MemberHeader from "./MemberHeader";
import styled from "styled-components";
const StyledAppLayout = styled.div`
  padding: 1.2rem 6rem;
`;
export default function MemberAppLayout() {
  return (
    <StyledAppLayout>
      <MemberHeader />
      <Outlet />
    </StyledAppLayout>
  );
}
