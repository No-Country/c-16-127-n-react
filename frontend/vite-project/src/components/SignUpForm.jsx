import { useEffect, useRef } from "react";

const SignUpForm = () => {
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <>
      <h1 className="text-3xl font-bold mb-4 text-center">Crear cuenta</h1>
      <form className="space-y-4 w-80 p-5">
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
            placeholder="Enter your username"
            ref={inputRef}
          />
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
            placeholder="Enter your email address"
          />
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
            placeholder="Enter your password"
          />
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
            placeholder="Confirm your password"
          />
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
