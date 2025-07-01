import { useEffect, useState } from "react";
import { BtnGoBack } from "../buttons/BtnGoBack";
import { ConfirmationMessage } from "../ConfirmationMessage/ConfirmationMessage";
import { deleteData, getData } from "../../services/api";

export const ProductList = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const loadProductos = async () => {
    try {
      setLoading(true);
      const data = await getData("/autos");
      setProductos(data);
    } catch (err) {
      console.error(err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProductos();
  }, []);

  // 🗑 Eliminar producto
  const handleConfirmationClose = async (confirmed) => {
    setShowConfirmation(false);
    if (!confirmed || selectedId == null) return;

    try {
      await deleteData(`/autos/${selectedId}`);
      // Actualizar lista sin volver a recargar todo
      setProductos((prev) => prev.filter((item) => item.id !== selectedId));
      setSelectedId(null);
    } catch (err) {
      console.error("Error al eliminar:", err.message);
      alert("No se pudo eliminar el ítem");
    }
  };

  if (loading) return <div>Cargando productos...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <div className="container mx-auto py-30">
        <BtnGoBack backTo={"/administracion"} />

        <h1 className="text-2xl text-blue-800 font-semibold my-5">
          Listar productos
        </h1>

        <table className="min-w-full bg-white border border-gray-200 rounded shadow">
          <thead>
            <tr className="bg-gray-100 text-left text-sm font-semibold text-gray-700">
              <th className="px-4 py-2 border-b">ID</th>
              <th className="px-4 py-2 border-b">Nombre</th>
              <th className="px-4 py-2 border-b text-center">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {productos.map((producto) => (
              <tr key={producto.id} className="hover:bg-gray-50">
                <td className="px-4 py-2 border-b">{producto.id}</td>
                <td className="px-4 py-2 border-b">{producto.name}</td>
                <td className="px-4 py-2 border-b space-x-2 text-center">
                  <button
                    /* onClick={() => handleEditar(producto.item_id)} */
                    className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 cursor-pointer"
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => {
                      setSelectedId(producto.id);
                      setShowConfirmation(true);
                    }}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 cursor-pointer"
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {showConfirmation && (
          <ConfirmationMessage onClose={handleConfirmationClose} />
        )}
      </div>
    </>
  );
};

/* const [showConfirmation, setShowConfirmation] = useState(false);
const [selectedCategoryId, setSelectedCategoryId] = useState(null);

const handleDeleteClick = () => {
  setShowConfirmation(true);
};

const handleConfirmationClose = (confirmed) => {
  setShowConfirmation(false);
  // Simulo eliminar una categoría
  if (confirmed && selectedCategoryId !== null) {
    // Ejecutar petición DELETE
    e.preventDefault();
    await deleteData("/autos/1");
  } else {
    console.log("Cancelar");
  }
}; */
