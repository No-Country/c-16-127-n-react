import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <section className="flex flex-col items-center justify-center gap-2 h-screen">
      <h1 className="text-4xl font-bold">Hubo un error</h1>
      <p className="text-2xl">{error.statusText || error.message}</p>
      <p className="text-2xl">{error.status}</p>
      <p className="text-2xl">Puedes intentar acceder más tarde</p>
      <Link
        to={"/"}
        className="font-bold text-xl hover:text-2xl ease-linear duration-100"
      >
        Regresar a inicio
      </Link>
    </section>
  );
};

export default ErrorPage;
