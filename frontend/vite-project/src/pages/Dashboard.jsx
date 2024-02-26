import { Outlet, Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <aside className="w-72 bg-gray-800 text-white p-4">
        <div className="flex gap-x-2 items-center  justify-center h-20">
          <h1 className="text-2xl font-bold">Project Ahead</h1>
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-box-arrow-right"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z"
              />
              <path
                fillRule="evenodd"
                d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"
              />
            </svg>
          </button>
        </div>
        <ul className="flex flex-col">
          <Link
            className="p-2 cursor-pointer hover:bg-gray-700 hover:rounded-lg text-xl"
            to={"/dashboard"}
          >
            Inicio
          </Link>
          <Link
            className="p-2 cursor-pointer hover:bg-gray-700 hover:rounded-lg text-xl"
            to={"projects"}
          >
            Proyectos
          </Link>
          <Link
            className="p-2 cursor-pointer hover:bg-gray-700 hover:rounded-lg text-xl"
            to={"tasks"}
          >
            Tareas
          </Link>
          <Link
            className="p-2 cursor-pointer hover:bg-gray-700 hover:rounded-lg text-xl"
            to={"settings"}
          >
            Ajustes
          </Link>
        </ul>
      </aside>
      <main className="w-4/5 p-4">
        <Outlet />
      </main>
    </div>
  );
};

export default Dashboard;
