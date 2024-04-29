import React from "react";
import MainNavUser from "./MainNavUser";
import Logo from "../Logo";
import styled from "styled-components";
import Search from "./Search";

const StyledMemberHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid var(--color-green--5);
  padding: 0.4rem 3.6rem;

  margin-bottom: 2.4rem;
`;
export default function MemberHeader() {
  return (
    <StyledMemberHeader>
      <Logo />
      <Search />
      <MainNavUser />
    </StyledMemberHeader>
  );
}
