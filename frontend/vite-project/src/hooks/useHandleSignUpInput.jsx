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
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      Object.keys(errors).length !== 0 &&
      Object.values(data).some((v) => v === "")
    ) {
      alert("Completa los campos correctamente");
      return;
    } else {
      alert("Registrado");
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
      Object.keys(errors).length !== 0 &&
        Object.values(data).some((v) => v === "")
    );
  };

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    validateInput(name, value);

    setData({ ...data, [name]: value });
  };

  const validateInput = (name, value) => {
    switch (name) {
      case "username":
        if (value.length <= 5) {
          setErrors({
            ...errors,
            username: "El nombre de usuario debe ser de al menos 5 carácteres",
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

  return { handleSubmit, handleChange, errors, showErrorsAndData, data };
};

export default useHandleSignUpInput;
