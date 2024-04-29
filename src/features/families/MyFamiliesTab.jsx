import React from "react";
import MyFamilyItem from "./MyFamilyItem";
import { useAuth } from "../../context/authContext";
import Empty from "../../ui/Empty";

export default function MyFamiliesTab() {
  const { user } = useAuth() || { user: localStorage.getItem("user") };
  console.log(user.families);
  if (!user.families.length)
    return (
      <div>
        <Empty resourceName="Familles" />
        <span>Envoyer des requetes a rejoindre des familles</span>
      </div>
    );
  return (
    <div>
      {user.families.map((family) => (
        <MyFamilyItem familyId={family._id} />
      ))}
    </div>
  );
}
