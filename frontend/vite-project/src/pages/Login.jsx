import LoginContent from "../components/LoginContent";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div
      className="bg-gray-100 min-h-screen 
    flex justify-center items-center"
    >
      <LoginContent />
      <Link
        className="fixed top-4 left-4 bg-black text-white
         rounded-lg p-2 mb-6 hover:bg-white
         hover:text-black hover:border hover:border-gray-300
         transition-all duration-300 4 "
        to={"/"}
      >
        Inicio
      </Link>
    </div>
  );
};

export default Login;
