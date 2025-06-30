import { useState } from "react";
import { productos } from "../../js/productos";
import { BtnGoBack } from "../buttons/BtnGoBack";
import { ConfirmationMessage } from "../ConfirmationMessage/ConfirmationMessage";

export const ListarProductos = () => {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);

  const handleDeleteClick = () => {
    setShowConfirmation(true);
  };

  const handleConfirmationClose = (confirmed) => {
    setShowConfirmation(false);
    // Simulo eliminar una categoría
    if (confirmed && selectedCategoryId !== null) {
      // Ejecutar petición DELETE
      console.log("Elimino producto con id: " + selectedCategoryId);
    } else {
      console.log("Cancelar");
    }
  };

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
              <tr key={producto.item_id} className="hover:bg-gray-50">
                <td className="px-4 py-2 border-b">{producto.item_id}</td>
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
                      setSelectedCategoryId(producto.item_id);
                      handleDeleteClick();
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
