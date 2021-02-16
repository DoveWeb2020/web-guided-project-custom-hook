import { useLocalStorage } from "./useLocalStorage";
// The utility that useState provides for a single state variable,
// this custom hook provides for an entire form, with some bonus functions that are helpful for forms :)

export const useForm = (initialValues) => {
  const [values, setValues] = useLocalStorage("formValues", initialValues);

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