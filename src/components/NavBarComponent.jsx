import { Link } from "react-router";
import img from "../assets/faviconFinal.png";

export const NavBarComponent = () => {
  return (
    <>
      <nav className="w-full fixed top-0 z-50 ">
        <div className="flex justify-between items-center py-4 px-10 border-b-3 border-blue-700 rounded-b-2xl bg-white">
          <Link
            to={"/"}
            className="flex items-center gap-2 text-2xl text-blue-700 font-bold"
          >
            <img className="w-12" src={img} alt="auto" />
            <p className="hidden lg:block ">AlquilerAutos</p>
          </Link>
          <div className="flex gap-4 font-semibold">
            <Link
              to={"/registrar"}
              className="p-2 rounded-md cursor-pointer bg-blue-700 hover:bg-blue-500 text-white"
            >
              Crear cuenta
            </Link>

            <Link
              to={"/iniciarSesion"}
              className="p-2 rounded-md cursor-pointer border border-blue-700 hover:bg-blue-200 text-blue-700"
            >
              Iniciar sesión
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};
