// on the way into localStorage, JSON.stringify (object -> string)
// on the way out of localStorage, JSON.parse (string -> object)
import { useState } from "react";

// This hook composes useState, providing the exact same format and functionality as useState, while also persisting the state value to localStorage

export const useLocalStorage = (initialValue) => {
  const [value, setValue] = useState(initialValue);
}