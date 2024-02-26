import { useEffect, useRef } from "react";
import useHandleSignUpInput from "../hooks/useHandleSignUpInput";
const SignUpForm = () => {
  const {
    handleSubmit,
    handleChange,
    errors,
    data,
    isRegistered,
    handleFocus,
  } = useHandleSignUpInput();
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, [isRegistered]);
  return (
    <>
      <form
        className="space-y-4 flex flex-col justify-center h-full p-5 "
        onSubmit={handleSubmit}
      >
        <h1 className="text-3xl font-bold mb-4 text-center">Crear cuenta</h1>
        <div>
          <label
            htmlFor="username"
            className="block text-gray-800 font-bold mb-2"
          >
            Nombre de usuario
          </label>
          <input
            type="text"
            id="username"
            name="username"
            className="w-full border border-gray-300 p-2 rounded-lg"
            placeholder="Ingresa nombre de usuario"
            ref={inputRef}
            onChange={handleChange}
            onFocus={handleFocus}
            autoComplete="off"
            value={data.username || ""}
          />
          {errors.username && <h2>{errors.username}</h2>}
        </div>
        <div>
          <label htmlFor="email" className="block text-gray-800 font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full border border-gray-300 p-2 rounded-lg"
            placeholder="Ingresa email"
            onChange={handleChange}
            onFocus={handleFocus}
            autoComplete="off"
            value={data.email || ""}
          />
          {errors.email && <h2>{errors.email}</h2>}
        </div>
        <div>
          <label
            htmlFor="password"
            className="block text-gray-800 font-bold mb-2"
          >
            Contraseña
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="w-full border border-gray-300 p-2 rounded-lg"
            placeholder="Ingresa contraseña"
            onChange={handleChange}
            onFocus={handleFocus}
            autoComplete="off"
            value={data.password || ""}
            required
          />
          {errors.password && <h2>{errors.password}</h2>}
        </div>
        <div>
          <label
            htmlFor="confirmPassword"
            className="block text-gray-800 font-bold mb-2"
          >
            Confirmar Contraseña
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            className="w-full border border-gray-300 p-2 rounded-lg"
            placeholder="Confirmar contraseña"
            onChange={handleChange}
            onFocus={handleFocus}
            value={data.confirmPassword || ""}
            autoComplete="off"
            required
          />
          {errors.confirmPassword && <h2>{errors.confirmPassword}</h2>}
        </div>
        <div>
          <button
            type="submit"
            className="bg-black text-white w-full
            rounded-lg p-2 mb-6 hover:bg-white
            hover:text-black hover:border hover:border-gray-300
            transition-all duration-300"
          >
            Registrarse
          </button>
        </div>
      </form>
    </>
  );
};

export default SignUpForm;
