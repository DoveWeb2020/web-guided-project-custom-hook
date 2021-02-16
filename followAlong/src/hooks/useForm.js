import { useState } from "react";
// The utility that useState provides for a single state variable,
// this custom hook provides for an entire form, with some bonus functions :)

export const useForm = (initialValues) => {
  const [values, setValues] = useState(initialValues);

  const handleChanges = e => {
    console.log("change event", e.target);
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
  };

  const clearForm = e => {
    e.preventDefault();
    setFirstName("");
  };

  // return value should be something *kinda* like [firstName, setFirstName]
  return [values, handleChanges, clearForm];
}