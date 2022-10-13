import { useState, useCallback } from 'react';

const useForm = (defaultValues = {}, config) => {
  const [values, setValues] = useState(defaultValues);
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(true);

  const handleChange = useCallback(
    (evt) => {
      const target = evt.target;
      const isCheckbox = target.type === 'checkbox';
      const name = target.name;
      const value = isCheckbox ? target.checked : target.value;
      const isNotValidValue = !config?.REGEX[name]?.test(value);

      setValues((oldValues) => ({ ...oldValues, [name]: value }));
      isNotValidValue && config?.INPUTS.includes(name) && value.length
        ? setErrors({ ...errors, [name]: config.MESSAGES[name] })
        : setErrors({ ...errors, [name]: target.validationMessage });

      if (target.closest('form'))
        setIsValid(target.closest('.form').checkValidity());
      else setIsValid(document.querySelector('.form').checkValidity());
    },
    [setValues, setErrors]
  );

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = true) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  return {
    values,
    errors,
    isValid,
    handleChange,
    setValues,
    setIsValid,
    resetForm,
  };
};

export default useForm;
