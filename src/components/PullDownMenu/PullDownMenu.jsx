// TODO: Tengo que recibir el usuario

import { AccountBox, ManageAccounts } from "@mui/icons-material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import EventNoteIcon from "@mui/icons-material/EventNote";
import LogoutIcon from "@mui/icons-material/Logout";

import { Link } from "react-router";

export const PullDownMenu = ({ user, onClose }) => {
  return (
    <div className="absolute right-0 mt-2 mr-10 bg-blue-700 w-[250px] shadow-2xl rounded-xl text-white">
      <div className="absolute right-0 mt-2 mr-2">
        <p
          onClick={onClose}
          className="text-xl hover:bg-blue-600 rounded-full px-2.5 py-1 cursor-pointer"
        >
          ✕
        </p>
      </div>
      <div className="my-3 flex-col">
        <p className="text-xl text-center">{user.firstname}</p>
        <p className="text-xl text-center">{user.last_name}</p>
        <div className="flex flex-col m-4 text-black">
          <Link
            to={"/perfil"}
            state={{ section: "perfil" }}
            onClick={onClose}
            className="flex gap-2 p-2 bg-white rounded-t-lg hover:bg-blue-200 cursor-pointer"
          >
            <AccountBox />
            Ver perfil
          </Link>

          {user.rol === "ADMIN" ? (
            <Link
              to={"/administracion"}
              onClick={onClose}
              className="flex gap-2 p-2 bg-white hover:bg-blue-200 cursor-pointer"
            >
              <ManageAccounts />
              Administración
            </Link>
          ) : (
            <>
              <Link
                to={"/perfil"}
                state={{ section: "favoritos" }}
                onClick={onClose}
                className="flex gap-2 p-2 bg-white hover:bg-blue-200 cursor-pointer"
              >
                <FavoriteIcon />
                Favoritos
              </Link>
              <Link
                to={"/perfil"}
                state={{ section: "reservas" }}
                onClick={onClose}
                className="flex gap-2 p-2 bg-white hover:bg-blue-200 cursor-pointer"
              >
                <EventNoteIcon />
                Reservas
              </Link>
            </>
          )}

          <Link
            to={"/perfil"}
            state={{ section: "cerrarSesion" }}
            onClick={onClose}
            className="flex gap-2 p-2 bg-white hover:bg-blue-200 rounded-b-lg  cursor-pointer"
          >
            <LogoutIcon />
            Cerrar sesión
          </Link>
        </div>
      </div>
    </div>
  );
};
