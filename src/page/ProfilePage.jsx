import { useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FavoriteIcon from "@mui/icons-material/Favorite";
import EventNoteIcon from "@mui/icons-material/EventNote";
import LogoutIcon from "@mui/icons-material/Logout";
import { Profile } from "../components/Profile/Profile";
import { Favs } from "../components/Profile/Favs";
import { Reservations } from "../components/Profile/Reservations";
import { LogoutWindow } from "../components/Profile/LogoutWindow";
import { useLocation } from "react-router";
import { ManageAccounts } from "@mui/icons-material";
import { AdminPage } from "./AdminPage";

export const ProfilePage = () => {
  const role = "ADMIN";
  const location = useLocation();
  const { section } = location.state || {};
  const [activeTab, setActiveTab] = useState(section);

  return (
    <section className="section place-items-center">
      <div className="w-[1000px] h-[500px] rounded-2xl">
        <div className="flex gap-10">
          <ul className="menu">
            <li
              className={`menu-item ${activeTab === "perfil" ? "active" : ""}`}
              onClick={() => {
                setActiveTab("perfil");
              }}
            >
              <AccountCircleIcon />
              Perfil
            </li>
            <li
              className={`menu-item ${
                activeTab === "favoritos" ? "active" : ""
              }`}
              onClick={() => {
                setActiveTab("favoritos");
              }}
            >
              <FavoriteIcon />
              Favoritos
            </li>
            <li
              className={`menu-item ${
                activeTab === "reservas" ? "active" : ""
              }`}
              onClick={() => {
                setActiveTab("reservas");
              }}
            >
              <EventNoteIcon />
              Reservas
            </li>
            {role === "ADMIN" && (
              <li
                className={`menu-item ${
                  activeTab === "administracion" ? "active" : ""
                }`}
                onClick={() => {
                  setActiveTab("administracion");
                }}
              >
                <ManageAccounts />
                Administración
              </li>
            )}
            <li
              className={`menu-item ${
                activeTab === "cerrarSesion" ? "active" : ""
              }`}
              onClick={() => {
                setActiveTab("cerrarSesion");
              }}
            >
              <LogoutIcon />
              Cerrar sesión
            </li>
          </ul>

          <div className="panel">
            {activeTab === "perfil" && <Profile />}
            {activeTab === "favoritos" && <Favs />}
            {activeTab === "reservas" && <Reservations />}
            {activeTab === "administracion" && "PANEL DE ADMINISTRACIÓN"}
            {activeTab === "cerrarSesion" && <LogoutWindow />}
          </div>
        </div>
      </div>
    </section>
  );
};
