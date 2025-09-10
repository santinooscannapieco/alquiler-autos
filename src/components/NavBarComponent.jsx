import { Link, useLocation } from "react-router";
import img from "../assets/faviconFinal.png";
import { useState } from "react";
import { PullDownMenu } from "./PullDownMenu/PullDownMenu";

// TODO: Cuando agregue traer el usuario de la BD tengo que modificar
// el estado y la parte del boton logout

export const NavBarComponent = () => {
  const location = useLocation();
  const [logger, setLogger] = useState(true);
  const [menu, setMenu] = useState(false);
  const [user, setUser] = useState({
    id: 1,
    firstname: "Santino",
    last_name: "Scannapieco",
    email: "san@gmail.com",
    car_reservation: null,
    rol: "ADMIN",
  });

  /* console.log(user); */

  return (
    <>
      <nav className="w-full fixed top-0 z-50">
        <div className="flex justify-between items-center py-4 px-10 border-b-3 border-blue-700 rounded-b-2xl bg-white">
          <Link
            to={"/"}
            className="flex items-center gap-2 text-2xl text-blue-700 font-bold"
          >
            <img className="w-12" src={img} alt="auto" />
            <p className="hidden lg:block ">AlquilerAutos</p>
          </Link>

          {logger ? (
            <div
              onClick={() => setMenu(!menu)}
              className="bg-blue-700 rounded-full px-2.5 py-2 cursor-pointer"
            >
              <p className="text-xl text-white">SS</p>
            </div>
          ) : (
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
          )}
        </div>
        {menu && location.pathname !== "/perfil" && (
          <PullDownMenu user={user} onClose={() => setMenu(false)} />
        )}
      </nav>
    </>
  );
};
