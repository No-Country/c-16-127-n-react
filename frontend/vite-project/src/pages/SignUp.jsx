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
        <div className="bg-white p-8 rounded-lg shadow-md">
          <SignUpForm />
        </div>
      </div>
      <div ref={bottomRef} className="bottom"></div>
    </>
  );
};

export default SignUp;
