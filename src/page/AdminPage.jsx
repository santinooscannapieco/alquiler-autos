import { Link } from "react-router";
import { BtnAdmin } from "../components/buttons/BtnAdmin";
import {
  Inventory2,
  AddBox,
  BarChart,
  CreateNewFolder,
  Group,
} from "@mui/icons-material";

export const AdminPage = () => {
  const iconFontSize = 80;

  return (
    <>
      <section className="section place-items-center">
        <h1 className="text-4xl text-blue-700 font-bold mb-10">
          PANEL DE ADMINISTRACIÓN
        </h1>

        <div className="flex gap-5">
          <Link to={`/administracion/listarProductos`}>
            <BtnAdmin
              text="Productos"
              icono={<Inventory2 sx={{ fontSize: iconFontSize }} />}
            />
          </Link>
          <Link to={`/administracion/agregarProducto`}>
            <BtnAdmin
              text="Agregar producto"
              icono={<AddBox sx={{ fontSize: iconFontSize }} />}
            />
          </Link>
          <Link to={`/administracion/agregarCategoria`}>
            <BtnAdmin
              text="Agregar Categoría"
              icono={<CreateNewFolder sx={{ fontSize: iconFontSize }} />}
            />
          </Link>
          <Link to={`/administracion`}>
            <BtnAdmin
              text="Ventas"
              icono={<BarChart sx={{ fontSize: iconFontSize }} />}
            />
          </Link>
          <Link to={`/administracion`}>
            <BtnAdmin
              text="Usuarios"
              icono={<Group sx={{ fontSize: iconFontSize }} />}
            />
          </Link>
        </div>
      </section>
    </>
  );
};
