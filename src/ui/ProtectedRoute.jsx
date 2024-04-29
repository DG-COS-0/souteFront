import styled from "styled-components";
import { useUser } from "../features/authentication/useUser";
import Spinner from "./Spinner";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useAuth } from "../context/authContext";
import PermissionsBlock from "./PermissionsBlock";
import { useFamilies } from "../features/families/useFamilies";

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;

function ProtectedRoute({ role, children }) {
  const roleArray = role.split(",");

  const navigate = useNavigate();
  const { token } = useAuth() || { token: localStorage.getItem("token") };
  const { isLoading, user } = useUser();

  useEffect(
    function () {
      if (!token) navigate("/login");
    },
    [token, user]
  );
  if (isLoading) return <Spinner />;
  if (token && !roleArray.includes(user.role)) return <PermissionsBlock />;
  if (token && roleArray.includes(user.role)) return children;
}

export default ProtectedRoute;
