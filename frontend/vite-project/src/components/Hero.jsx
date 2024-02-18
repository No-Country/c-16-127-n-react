import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto max-w text-center">
          <h1 className=" leading-loose text-3xl font-extrabold sm:text-5xl ">
            Impulsa tus proyectos con
            <strong className="font-extrabold text-red-700 sm:block">
              ProjectAhead{" "}
            </strong>
          </h1>
          <p className="mt-4 sm:text-xl/relaxed">
            Visualiza el progreso de tus proyectos de forma clara y organizada
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              className="block w-full rounded bg-red-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
              to={"/signup"}
            >
              Empezar
            </Link>
            <a
              className="block w-full rounded px-12 py-3 text-sm font-medium text-red-600 shadow hover:text-red-700 focus:outline-none focus:ring active:text-red-500 sm:w-auto"
              href="#feature-row"
            >
              Más información
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
