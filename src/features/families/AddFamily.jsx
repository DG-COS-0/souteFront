import React from "react";
import CreateFamilyForm from "./CreateFamilyForm";
import Modal from "../../ui/Modal";
import Button from "../../ui/Button";

export default function AddFamily() {
  return (
    <div
      style={{
        position: "fixed",
        right: "40px",
        bottom: "70px",
        boxShadow: "5rem 6rem 8rem rgba(0, 0, 0, 0.2) ",
      }}
    >
      <Modal>
        <Modal.Open opens="create-family-form">
          <Button>Add new Family</Button>
        </Modal.Open>
        <Modal.Window name="create-family-form">
          <CreateFamilyForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}
