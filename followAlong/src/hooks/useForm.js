import { useState } from "react";

export const useForm = () => {
    const [firstName, setFirstName] = useState("");

    // return value should be something *kinda* like [firstName, setFirstName]
    return [firstName, setFirstName]
}