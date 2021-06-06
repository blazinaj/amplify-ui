import {useState} from "react";

export const useFormFields = (initialFields) => {
  /**
   * The field configuration for this form
   */
  const [fields, setFields] = useState(initialFields);

  return [fields, setFields]
}
