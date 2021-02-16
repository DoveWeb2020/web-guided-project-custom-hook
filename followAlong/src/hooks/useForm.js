import { useState } from "react";

export const useForm = () => {
  const [firstName, setFirstName] = useState("");

  const handleChanges = e => {
    setFirstName(e.target.value);
  };

  // return value should be something *kinda* like [firstName, setFirstName]
  return [firstName, setFirstName];
}