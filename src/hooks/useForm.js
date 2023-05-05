import React, { useState } from "react";

const useForm = (validate) => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    //console.log(event.target.value, event.target.name);
    const { name, value } = event.target;

    setValues((prevValues) => {
      return {
        ...prevValues,
        [name]: value,
      };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setErrors(validate(values))
  };
  return { handleChange, values,handleSubmit,errors };
};

export default useForm;
