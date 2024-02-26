import { useState, useEffect } from "react";
import LoginInput from "./LoginInput";
import LoginPhotoModal from "./LoginPhotoModal";
import { Link, useNavigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
const LoginContent = () => {
  const { setAuth } = useAuth();
  const [user, setUser] = useState({ email: "", password: "" });
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from.pathname || "/";
  const { email, password } = user;
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(errorMessage);
    if (!email || !password) {
      setErrorMessage("You should enter all the credentials");
      return;
    }
    setAuth({ email, password });
    navigate(from, { replace: true });
    setUser({});

    console.log("Bienvenido");
  };

  const handleOnChange = (e) => {
    let value = e.target.value;
    let name = e.target.name;
    setUser({ ...user, [name]: value });
  };

  return (
    <>
      <section
        className="bg-white relative 
   flex flex-col md:flex-row m-6 
   shadow-2xl rounded-2xl space-y-8 md:space-y-0"
      >
        <div
          className="flex flex-col justify-center
     p-8 md:p-14"
        >
          <span className="text-4xl font-bold mb-3">Iniciar sesión</span>
          <span className="text-gray-400 font-light mb-8">
            Accede a tu cuenta para continuar con la gestión de proyectos
          </span>
          <form onSubmit={handleSubmit}>
            <LoginInput
              title="email"
              inputType="email"
              onchange={handleOnChange}
              value={user.email || ""}
            />
            <LoginInput
              title="password"
              inputType="password"
              onchange={handleOnChange}
              value={user.password || ""}
            />
            <div className="flex justify-between w-full py-4">
              <div className="mr-10">
                <input
                  type="checkbox"
                  className="mr-2"
                  name="chbox"
                  id="chbox"
                />
                <span className="text-md">Recordar</span>
              </div>
              <span className="text-md font-bold">
                ¿Has olvidado tu contraseña?
              </span>
            </div>
            <button
              className="bg-black text-white w-full
         rounded-lg p-2 mb-6 hover:bg-white
         hover:text-black hover:border hover:border-gray-300
         transition-all duration-300"
              type="submit"
            >
              Iniciar sesión
            </button>
          </form>

          {/*        <button
       className="border border-gray-300 w-full
       text-md p-2 mb-6 rounded-lg transition-all duration-300
       hover:bg-black hover:text-white"
       >
       <div className="flex justify-center items-center gap-2">
       <img src="/logo-google.svg" alt="logo-google" className="w-6 h-6" />
       <span>Sign in with Google</span>
       </div>
     </button> */}
          <div className="flex justify-center items-center gap-3">
            <span className="text-gray-400">¿No estás registrado?</span>
            <Link className="font-bold" to={"/signup"}>
              Crea una cuenta
            </Link>
          </div>
        </div>
        <LoginPhotoModal />
      </section>
    </>
  );
};

export default LoginContent;
