import { useState, useCallback } from 'react';

const useForm = (inputValues) => {
  const [values, setValues] = useState(inputValues);
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(true);

  const handleChange = useCallback(
    (evt) => {
      const { value, name, validationMessage } = evt.target;
      setValues((oldValues) => ({ ...oldValues, [name]: value }));
      setErrors((oldValues) => ({ ...oldValues, [name]: validationMessage }));
      setIsValid(evt.target.closest('.form').checkValidity());
    },
    [setValues, setErrors],
  );

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid],
  );

  return {
    values,
    handleChange,
    errors,
    isValid,
    resetForm,
    setValues,
    setIsValid,
  };
};

export default useForm;
