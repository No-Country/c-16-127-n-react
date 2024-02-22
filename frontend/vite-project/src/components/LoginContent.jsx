import LoginInput from "./LoginInput";
import LoginPhotoModal from "./LoginPhotoModal";

const LoginContent = () => {
  return (
    <div
      className="bg-white relative 
      flex flex-col md:flex-row m-6 
      shadow-2xl rounded-2xl space-y-8 md:space-y-0"
    >
      <div
        className="flex flex-col justify-center
        p-8 md:p-14"
      >
        <span className="text-4xl font-bold mb-3">Login</span>
        <span className="text-gray-400 font-light mb-8">
          Secure access to your account login.
        </span>
        <LoginInput title="Email" inputType="text" />
        <LoginInput title="Contraseña" inputType="password" />
        <div className="flex justify-between w-full py-4">
          <div className="mr-10">
            <input type="checkbox" className="mr-2" name="chbox" id="chbox" />
            <span className="text-md">Remember for 24hs!</span>
          </div>
          <span className="text-md font-bold">¿Has olvidado tu contraseña?</span>
        </div>
        <button
          className="bg-black text-white w-full
          rounded-lg p-2 mb-6 hover:bg-white
          hover:text-black hover:border hover:border-gray-300
          transition-all duration-300"
        >
          Iniciar sesión
        </button>
        <button
          className="border border-gray-300 w-full
          text-md p-2 mb-6 rounded-lg transition-all duration-300
          hover:bg-black hover:text-white"
        >
          <div className="flex justify-center items-center gap-2">
            <img src="/logo-google.svg" alt="logo-google" className="w-6 h-6" />
            <span>Sign in with Google</span>
          </div>
        </button>
        <div className="flex justify-center items-center gap-3">
          <span className="text-gray-400">¿No estás registrado?</span>
          <span className="font-bold">Crea una cuenta</span>
        </div>
      </div>
      <LoginPhotoModal />
    </div>
  );
};

export default LoginContent;
