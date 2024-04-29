import React from "react";
import CreateRequestForm from "../requests/CreateResquestForm";
import { useAuth } from "../../context/authContext";
import Modal from "../../ui/Modal";

export default function AddRequest({ children }) {
  const { token } = useAuth() || { token: localStorage.getItem("token") };

  const sendRequest = ({ familyId, requestInfo, token }) => {};
  return (
    <div>
      <Modal>
        <Modal.Open opens="cabin-form">{children}</Modal.Open>
        <Modal.Window name="cabin-form">
          <CreateRequestForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}
