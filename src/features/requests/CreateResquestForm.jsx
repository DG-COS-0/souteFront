import { useForm } from "react-hook-form";

import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import FormRow from "../../ui/FormRow";

import { useAuth } from "../../context/authContext";
import useCreateRequest from "./useCreateRequest";
import { useUsers } from "../users/useUsers";
import Spinner from "../../ui/Spinner";
import { convertArray } from "three/src/animation/AnimationUtils.js";
import Select from "../../ui/Select";
import CustomSelect from "../../ui/CustomSelect";

export default function CreateRequestForm({ onCloseModal }) {
  const { isLoading: isCreatingRequest, createNewRequest } = useCreateRequest();
  const { isLoading: isGettingUsers, users } = useUsers();

  const isLoading = isCreatingRequest || isGettingUsers;
  const { register, handleSubmit, reset, getValues, formState } = useForm({});
  const { errors } = formState;
  const { token } = useAuth() || { token: localStorage.getItem("token") };

  function onSubmit(data) {
    console.log(data);
    createNewRequest(
      { requestInfo: data, token },
      {
        onSuccess: (data) => {
          reset();
          onCloseModal?.();
        },
      }
    );
  }

  function onError(errors) {
    console.error(errors);
  }
  if (isGettingUsers) return <Spinner />;
  return (
    <Form
      onSubmit={handleSubmit(onSubmit, onError)}
      type={onCloseModal ? "modal" : "regular"}
    >
      <FormRow label="Votre pere" error={errors?.childOfMr?.message}>
        <select
          id="childOfMr"
          disabled={isLoading}
          {...register("childOfMr", {
            required: "ce champ est requis",
          })}
        >
          {users.data.data.map((e) => (
            <option
              key={e._id}
              value={e._id}
            >{`${e.surName} ${e.firstNames}`}</option>
          ))}
        </select>
      </FormRow>
      <FormRow label="Votre mere" error={errors?.childOfMme?.message}>
        <select
          id="childOfMr"
          disabled={isLoading}
          {...register("childOfMme", {
            required: "ce champ est requis",
          })}
        >
          {users.data.data.map((e) => (
            <option
              key={e._id}
              value={e._id}
            >{`${e.surName} ${e.firstNames}`}</option>
          ))}
        </select>
      </FormRow>
      <FormRow label="Message" error={errors?.senderMessage?.message}>
        <Textarea
          id="senderMessage"
          defaultValue=""
          disabled={isLoading}
          {...register("senderMessage", {
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
          Envoyer la requete
        </Button>
      </FormRow>
    </Form>
  );
}
