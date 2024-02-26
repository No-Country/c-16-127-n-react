import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-gray-100 py-4 px-6 border-black border-b ">
      <div className="flex flex-row items-center">
        <img src="logo.png" alt="logo" className="w-14" />
        <Link
          to={"/"}
          className="font-bold text-2xl m-2 hover:text-red-700 ease-in duration-100"
        >
          Project Ahead
        </Link>
      </div>
      <div>
        <Link
          className="m-2 text-xl hover:text-2xl ease-in duration-200 hover:font-semibold"
          to={"/dashboard"}
        >
          Usuario
        </Link>
        <Link
          to={"/login"}
          className="m-2 text-xl hover:text-2xl ease-in duration-200 hover:font-semibold"
        >
          Iniciar sesión
        </Link>

        <Link
          to={"/signup"}
          className="m-2 text-xl hover:text-2xl ease-in duration-200 hover:font-semibold"
        >
          Registrarse
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
