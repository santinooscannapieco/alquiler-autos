import { Link } from "react-router";

export const AdminPage = () => {
  return (
    <>
      <div className="container mx-auto py-30 text-center">
        <h1 className="text-4xl text-blue-800 font-semibold mb-5">
          Panel de Administración
        </h1>
        <h3 className="text-xl mb-5">Funcionalidades:</h3>
        <div className="flex justify-center gap-5">
          <Link to={`/administracion/listarProductos`}>
            <button className="text-white bg-blue-500 hover:bg-blue-300 p-4 rounded-2xl cursor-pointer">
              Lista de Productos
            </button>
          </Link>
          <Link to={`/administracion/agregarProducto`}>
            <button className="text-white bg-blue-500 hover:bg-blue-300 p-4 rounded-2xl cursor-pointer">
              Agregar Producto
            </button>
          </Link>
          <Link to={`/administracion/agregarCategoria`}>
            <button className="text-white bg-blue-500 hover:bg-blue-300 p-4 rounded-2xl cursor-pointer">
              Agregar Categoría
            </button>
          </Link>
          <Link to={`/administracion`}>
            <button className="text-white bg-blue-500 hover:bg-blue-300 p-4 rounded-2xl cursor-pointer">
              Boton 4
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};
