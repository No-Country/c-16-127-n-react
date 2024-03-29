import { Link } from "react-router-dom";
import SignUpForm from "../components/SignUpForm";
import { useEffect, useRef } from "react";
const SignUp = () => {
  const bottomRef = useRef(null);
  useEffect(() => { 
    bottomRef.current?.scrollIntoView({ behaviour: "smooth", block: "end" });
  }, []);
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md h-84 w-1/4">
          <SignUpForm />
        </div>
      </div>
      <Link
        className="fixed top-4 left-4 bg-black text-white
         rounded-lg p-2 mb-6 hover:bg-white
         hover:text-black hover:border hover:border-gray-300
         transition-all duration-300 4 "
        to={"/"}
      >
        Inicio
      </Link>
      <div ref={bottomRef} className="bottom"></div>
    </>
  );
};

export default SignUp;
