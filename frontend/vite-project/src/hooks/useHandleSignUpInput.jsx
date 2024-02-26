import { useState } from "react";

const useHandleSignUpInput = () => {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [isRegistered, setIsRegistered] = useState(false);
  const [isInputFieldFocused, setIsInputFieldFocused] = useState({
    username: false,
    email: false,
    password: false,
    confirmPassword: false,
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      Object.values(errors).some((e) => e !== "") ||
      Object.values(data).some((v) => v === "")
    ) {
      alert("Completa los campos correctamente");
      return;
    } else {
      alert("Registrado");
      setIsRegistered(!isRegistered);
      console.log("info", data);
      setData({});
    }
  };

  const showErrorsAndData = () => {
    console.log("ERRORES", errors);
    console.log(Object.keys(errors).length);
    console.log(data);
    console.log(Object.values(data).some((v) => v === ""));
    console.log("DATA ARRAY:", Object.values(data));
    console.log(
      "CONDITION",
      Object.values(errors).some((e) => e === "") ||
        Object.values(data).some((v) => v === "")
    );
    console.log("FOCUS", isInputFieldFocused);
    console.log(
      Object.values(isInputFieldFocused).filter((v) => v === true).length > 1
    );
  };

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    validateInput(name, value);

    setData({ ...data, [name]: value });
  };

  const handleFocus = (e) => {
    let name = e.target.name;
    switch (name) {
      case "username":
        setIsInputFieldFocused({
          ...isInputFieldFocused,
          [name]: true,
        });

        break;
      case "password":
        setIsInputFieldFocused({
          ...isInputFieldFocused,
          [name]: true,
        });
        break;
      case "email":
        setIsInputFieldFocused({
          ...isInputFieldFocused,
          [name]: true,
        });
        break;
      case "confirmPassword":
        setIsInputFieldFocused({
          ...isInputFieldFocused,
          [name]: true,
        });
        break;
    }
  };

  /*   const handleBlur = (e) => {
    let name = e.target.name;
    if (Object.values(isInputFieldFocused).filter((v) => v === true).length > 1)
      setIsInputFieldFocused({
        ...isInputFieldFocused,
        [name]: false,
      });
  }; */
  const validateInput = (name, value) => {
    switch (name) {
      case "username":
        if (value.length <= 5 && value.length < 11) {
          setErrors({
            ...errors,
            username:
              "El nombre de usuario debe ser de al menos 5 carácteres y no más de 10",
          });
        } else {
          setErrors({ ...errors, username: "" });
        }
        break;
      case "email":
        if (
          !new RegExp(
            /^[a-zA-Z0-9._%+-ñÑáéíóúÁÉÍÓÚ]+@[a-zA-Z0-9.-ñÑáéíóúÁÉÍÓÚ]+\.[a-zA-Z]{2,4}$/
          ).test(value)
        ) {
          setErrors({ ...errors, email: "Debes ingresar un email válido" });
        } else {
          setErrors({ ...errors, email: "" });
        }
        break;
      case "password":
        if (
          !new RegExp(
            /^(?=.*[a-z]{2})(?=.*[A-Z])(?=.*\d{1})(?=.*[!-/:-@]).{6,8}$/
          ).test(value)
        ) {
          setErrors({
            ...errors,
            password: `La contraseña al menos debe contener: 6-8 carácteres:
            2 números, 1 letra mayúscula
            2 minúsculas y 1 símbolo
            `,
          });
        } else {
          setErrors({ ...errors, password: "" });
        }
        break;
      case "confirmPassword":
        if (value !== data["password"]) {
          setErrors({
            ...errors,
            confirmPassword: "La contraseña debe ser igual",
          });
        } else {
          setErrors({ ...errors, confirmPassword: "" });
        }
        break;
    }
  };

  return {
    handleSubmit,
    handleChange,
    errors,
    showErrorsAndData,
    data,
    isRegistered,
    handleFocus,
  };
};

export default useHandleSignUpInput;
