import { useState } from "react";
// The utility that useState provides for a single state variable,
// this custom hook provides for an entire form, with some bonus functions :)

export const useForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleFirstNameChanges = e => {
    setFirstName(e.target.value);
  };

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