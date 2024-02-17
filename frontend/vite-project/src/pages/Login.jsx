const Login = () => {
  return (
    <div className="border-2 border-red-500 flex justify-center items-center min-h-screen bg-gray-100">
      <div
        className="border-2 border-blue-400 relative flex flex-col
            m-6 space-y-8 bg-white shadow-2xl rounded-2xl
            md:flex-row md:space-y-0"
      >
        <div className="flex flex-col justify-center p-8 md:p-14">
          <span className="mb-3 text-4xl font-bold">Login</span>
          <span className="font-light text-gray-400 mb">
            Lorem ipsum! dolor sit amet consesour
          </span>
          <div className="py-4">
            <span className="mb-2 text-md">Email</span>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md 
                            placeholder:font-light placeholder:text-gray-500"
              name="email"
              id="email"
            />
          </div>
          <div className="py-4">
            <span className="mb-2 text-md">Password</span>
            <input
              type="password"
              className="w-full p-2 border border-gray-300 rounded-md 
                            placeholder:font-light placeholder:text-gray-500"
              name="pass"
              id="pass"
            />
          </div>
          <div className="flex justify-between w-full py-4">
            <div className="mr-24">
              <input type="checkbox" name="ch" id="ch" className="mr-2" />
              <span className="text-md">Remember for 10 days!</span>
            </div>
            <span className="font-bold text-md">Forgot Password</span>
          </div>
          <button
            className="w-full bg-black text-white p-2 rounded-lg mb-6
                        hover:bg-white hover:text-black hover:border hover:border-gray-300"
          >
            Sign In
          </button>
          <button
            className="w-full border border-gray-300 text-md p-2 rounded-lg mb-6 
                    hover:bg-black hover:text-white"
          >
            <img
              src="logo-google.svg"
              alt="logo-google"
              className="w-6 h-6 inline mr-2"
            />
            Sign in with Google
          </button>
          <div className="text-center text-gray-400">
            Dont&apos;have an account?
            <span className="font-bold text-black">Sign up for free</span>
          </div>
        </div>
        <div className="relative">
          <div className="bg-red-400 w-[400px] h-full hidden rounded-r-2xl md:block object-cover"></div>
          <div
            className="absolute hidden bottom-10 right-6 p-6 bg-white bg-opacity-30
                    backdrop-blur-sm rounded drop-shadow-lg md:block"
          >
            <span className="text-white text-xl">
              Colocar una imagen si es necesario para la version desktop
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
