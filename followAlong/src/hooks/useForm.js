import { useState } from "react";
// The utility that useState provides for a single state variable,
// this custom hook provides for an entire form, with some bonus functions :)

const initialValues = {
  firstName: "",
  lastName: ""
}

export const useForm = () => {
  const [values, setValues] = useState();

  // if firstName edited, call this one
  const handleFirstNameChanges = e => {
    setFirstName(e.target.value);
  };

  // if lastName edited, call this one
  const handleLastNameChanges = e => {
    setLastName(e.target.value);
  };

  const clearForm = e => {
    e.preventDefault();
    setFirstName("");
  };

  // return value should be something *kinda* like [firstName, setFirstName]
  return [firstName, lastName, handleChanges, clearForm];
}