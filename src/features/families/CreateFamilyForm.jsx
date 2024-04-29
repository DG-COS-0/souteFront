import { useForm } from "react-hook-form";

import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import FormRow from "../../ui/FormRow";
import { useCreateFamily } from "./useCreateFamily";
import { useAuth } from "../../context/authContext";

function CreateFamilyForm({ onCloseModal }) {
  const { isLoading, createFamily } = useCreateFamily();

  const { register, handleSubmit, reset, getValues, formState } = useForm({});
  const { errors } = formState;
  const { token } = useAuth() || { token: localStorage.getItem("token") };
  function onSubmit(data) {
    let image = typeof data.image === "string" ? data.image : data.image[0];
    const formattedData = { ...data, image };
    const infoToSend = new FormData();
    Object.keys(formattedData).map((e) => {
      infoToSend.append(e, formattedData[e]);
    });
    console.log("create family yo");
    createFamily(
      { familyInfo: infoToSend, token },
      {
        onSuccess: (data) => {
          reset();
          onCloseModal?.();
        },
      }
    );
  }

  function onError(errors) {
    console.log(errors);
  }

  return (
    <Form
      onSubmit={handleSubmit(onSubmit, onError)}
      type={onCloseModal ? "modal" : "regular"}
    >
      <FormRow label="Nom de votre famille" error={errors?.name?.message}>
        <Input
          type="text"
          id="name"
          disabled={isLoading}
          {...register("name", {
            required: "ce champ est requis",
          })}
        />
      </FormRow>

      <FormRow
        label="Description de la famille"
        error={errors?.description?.message}
      >
        <Textarea
          type="number"
          id="description"
          defaultValue=""
          disabled={isLoading}
          {...register("description", {
            required: "ce champ est requis",
          })}
        />
      </FormRow>

      <FormRow label="Image de garde">
        <FileInput
          id="image"
          accept="image/*"
          {...register("image", {
            required: "ce champ est requis",
          })}
        />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button
          variation="secondary"
          type="reset"
          onClick={() => onCloseModal?.()}
        >
          Retour
        </Button>
        <Button type="submit" disabled={isLoading}>
          Creer Famille
        </Button>
      </FormRow>
    </Form>
  );
}

export default CreateFamilyForm;
