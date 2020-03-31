import { useState } from 'react';

export const useFormFields = initialState => {
  const [fields, setFields] = useState(initialState);

  return [
    fields,
    ({ target: { id, value } }) => (
      setFields({ ...fields, [id]: value })
    )
  ];
};
