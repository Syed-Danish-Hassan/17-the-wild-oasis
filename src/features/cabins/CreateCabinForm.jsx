//import styled from "styled-components";

import { useForm } from "react-hook-form";
//import { useQueryClient } from "@tanstack/react-query";
//import toast from "react-hot-toast";
//import { useMutation } from "@tanstack/react-query";
import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import FormRow from "../../ui/FormRow";
//import { createEditCabin } from "../../services/apiCabins";
import { useCreateCabin } from "./useCreateCabin";
import { useEditCabin } from "./useEditCabin";
// const FormRow2 = styled.div`
//   display: grid;
//   align-items: center;
//   grid-template-columns: 24rem 1fr 1.2fr;
//   gap: 2.4rem;

//   padding: 1.2rem 0;

//   &:first-child {
//     padding-top: 0;
//   }

//   &:last-child {
//     padding-bottom: 0;
//   }

//   &:not(:last-child) {
//     border-bottom: 1px solid var(--color-grey-100);
//   }

//   &:has(button) {
//     display: flex;
//     justify-content: flex-end;
//     gap: 1.2rem;
//   }
// `;

// const Label = styled.label`
//   font-weight: 500;
// `;

// const Error = styled.span`
//   font-size: 1.4rem;
//   color: var(--color-red-700);
// `;

function CreateCabinForm({ cabinToEdit = {}, onCloseModal }) {
  const { id: editId, ...editValues } = cabinToEdit;
  const isEditSession = Boolean(editId);
  const { isCreating, createCabin } = useCreateCabin();
  const { isEditing, editCabin } = useEditCabin();
  const isWorking = isCreating || isEditing;

  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors, isValid },
  } = useForm({ defaultValues: isEditSession ? editValues : {} });

  //const errors = formState;
  //console.log(errors);

  // const queryClient = useQueryClient();
  // const { mutate: createCabinMutation, isLoading: isCreating } = useMutation({
  //   /// compare it with delete mutation, interesting
  //   mutationFn: createEditCabin,
  //   onSuccess: () => {
  //     toast.success("New cabin successfully created.");
  //     queryClient.invalidateQueries({ queryKey: ["cabins"] });
  //     reset();
  //   },
  //   onError: (error) => toast.error(error.message),
  // });

  // const { mutate: editCabinMutation, isLoading: isEditing } = useMutation({
  //   /// compare it with delete mutation, interesting
  //   mutationFn: ({ newCabinData, id }) => createEditCabin(newCabinData, id),
  //   onSuccess: () => {
  //     toast.success("Cabin successfully edited.");
  //     queryClient.invalidateQueries({ queryKey: ["cabins"] });
  //     reset();
  //   },
  //   onError: (error) => toast.error(error.message),
  // });

  function onSubmit(data) {
    //console.log(data);
    const image = typeof data.image === "string" ? data.image : data.image[0];
    if (isEditSession)
      //editCabinMutation({ newCabinData: { ...data, image }, id: editId });
      // else createCabinMutation({ ...data, image: image });
      editCabin(
        { newCabinData: { ...data, image }, id: editId },
        {
          onSuccess: (data) => {
            console.log("edited", data);
            //reset();
          },
        },
      );
    else
      createCabin(
        { ...data, image: image },
        {
          onSuccess: (data) => {
            console.log("created", data);
            reset();
            onCloseModal?.();
          },
        },
      );
  }
  function onError(errors) {
    // console.log(errors);
  }

  return (
    <Form
      onSubmit={handleSubmit(onSubmit, onError)}
      type={onCloseModal ? "modal" : "regular"}
    >
      <FormRow label="Cabin name" error={errors?.name?.message}>
        <Input
          type="text"
          id="name"
          disabled={isWorking}
          {...register("name", {
            required: "Name is required",
            min: { value: 1, message: "capacity should be atleast 1" },
          })}
        />
      </FormRow>

      <FormRow label="Maximum Capacity" error={errors?.maxCapacity?.message}>
        <Input
          type="number"
          id="maxCapacity"
          disabled={isWorking}
          {...register("maxCapacity", {
            required: "Capacity is required",
            min: { value: 1, message: "max capacity should be atleast 1" },
          })}
        />
      </FormRow>
      <FormRow label="Regular Price" error={errors?.regularPrice?.message}>
        <Input
          type="number"
          id="regularPrice"
          disabled={isWorking}
          {...register("regularPrice", {
            required: "Price is required",
            min: { value: 1, message: "price should be atleast 1" },
          })}
        />
      </FormRow>
      <FormRow label="Discount" error={errors?.discount?.message}>
        <Input
          type="number"
          id="discount"
          disabled={isWorking}
          defaultValue={0}
          {...register("discount", {
            required: "Discount is required",
            validate: (value) =>
              value <= getValues().regularPrice ||
              "discount should be less than regular price",
          })}
        />
      </FormRow>

      <FormRow label="Description" error={errors?.description?.message}>
        <Textarea
          type="number"
          id="description"
          disabled={isWorking}
          defaultValue=""
          {...register("description", { required: "Description is required" })}
        />
      </FormRow>

      <FormRow label="Cabin Photo">
        <FileInput
          id="image"
          disabled={isWorking}
          accept="image/*"
          {...register("image", {
            required: isEditSession ? false : "The image field is required",
          })}
        />
      </FormRow>
      {/* <FormRow>
        <Label htmlFor="maxCapacity">Maximum capacity</Label>
        <Input
          type="number"
          id="maxCapacity"
          {...register("maxCapacity", {
            required: "Capacity is required",
            min: { value: 1, message: "max capacity should be atleast 1" },
          })}
        />
        {errors?.maxCapacity?.message && (
          <Error>{errors.maxCapacity.message}</Error>
        )}
      </FormRow> */}

      {/* <FormRow>
        <Label htmlFor="regularPrice">Regular price</Label>
        <Input
          type="number"
          id="regularPrice"
          {...register("regularPrice", {
            required: "Price is required",
            min: { value: 1, message: "price should be atleast 1" },
          })}
        />
        {errors?.regularPrice?.message && (
          <Error>{errors.regularPrice.message}</Error>
        )}
      </FormRow> */}

      {/* <FormRow>
        <Label htmlFor="discount">Discount</Label>
        <Input
          type="number"
          id="discount"
          defaultValue={0}
          {...register("discount", {
            required: "Discount is required",
            validate: (value) =>
              value <= getValues().regularPrice ||
              "discount should be less than regular price",
          })}
        />
        {errors?.discount?.message && <Error>{errors.discount.message}</Error>}
      </FormRow> */}

      {/* <FormRow>
        <Label htmlFor="description">Description for website</Label>
        <Textarea
          type="number"
          id="description"
          defaultValue=""
          {...register("description", { required: "Description is required" })}
        />
        {errors?.description?.message && (
          <Error>{errors.description.message}</Error>
        )}
      </FormRow> */}

      {/* <FormRow>
        <Label htmlFor="image">Cabin photo</Label>
        <FileInput id="image" accept="image/*" />
      </FormRow> */}

      <FormRow>
        {/* type is an HTML attribute! */}

        <Button
          variation="secondary"
          type="reset"
          disabled={isWorking}
          onClick={() => onCloseModal?.()}
        >
          Cancel
        </Button>
        <Button disabled={isWorking}>
          {isEditSession ? "Update Cabin" : "Create New Cabin"}
        </Button>
      </FormRow>
    </Form>
  );
}

export default CreateCabinForm;
