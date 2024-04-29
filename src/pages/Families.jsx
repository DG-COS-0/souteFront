import React from "react";
import FamilyItem from "../features/families/FamilyItem";
import Modal from "../ui/Modal";
import Button from "../ui/Button";
import AddFamily from "../features/families/AddFamily";
import FamilyTab from "../features/families/FamilyTab";

export default function Families() {
  return (
    <>
      <div>
        <FamilyTab />
      </div>
      <AddFamily />
    </>
  );
}
