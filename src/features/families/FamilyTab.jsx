import React from "react";
import Empty from "../../ui/Empty";
import Spinner from "../../ui/Spinner";
import { useFamilies } from "./useFamilies";
import FamilyItem from "./FamilyItem";
import styled from "styled-components";
import Pagination from "../../ui/Pagination";
const Container = styled.div`
  overflow-y: auto;
  max-height: 70vh;
`;
export default function FamilyTab() {
  const { isLoading, familiesData } = useFamilies();

  if (isLoading) return <Spinner />;

  if (!familiesData.data.families.length)
    return (
      <div>
        <Empty resourceName="familles" />
      </div>
    );

  return (
    <div>
      {familiesData.data.families.reverse().map((family) => {
        return <FamilyItem family={family} key={family.id} />;
      })}
      <Pagination count={familiesData.totalNb} />
    </div>
  );
}
