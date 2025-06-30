import { useState } from "react";
import { BtnGoBack } from "../buttons/BtnGoBack";
import { ConfirmationMessage } from "../ConfirmationMessage/ConfirmationMessage";

const categories = [
  { id: 1, type: "Económico" },
  { id: 2, type: "Estandar" },
  { id: 3, type: "Intermedio" },
  { id: 4, type: "De lujo" },
  { id: 5, type: "Élite" },
  { id: 6, type: "Premium" },
  { id: 7, type: "Eléctrico" },
  { id: 8, type: "Compacto" },
  { id: 9, type: "Grande" },
  { id: 10, type: "Descapotable" },
  { id: 11, type: "Deportivo" },
  { id: 12, type: "Híbrido" },
];

export const AddCategory = () => {
  const [editar, setEditar] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const [editValues, setEditValues] = useState(
    categories.reduce((acc, cat) => {
      acc[cat.id] = cat.type;
      return acc;
    }, {})
  );

  const handleInputChange = (id, newValue) => {
    setEditValues((prev) => ({
      ...prev,
      [id]: newValue,
    }));
  };

  const guardarCambios = () => {
    console.log("Valores actualizados:", editValues);
    // Ejecutar petición PUT para actualizar los valores
  };

  const handleEditarClick = () => {
    if (editar) {
      guardarCambios();
    }
    setEditar(!editar);
  };

  const handleDeleteClick = () => {
    setShowConfirmation(true);
  };

  const handleConfirmationClose = (confirmed) => {
    setShowConfirmation(false);
    // Simulo eliminar una categoría
    if (confirmed && selectedCategoryId !== null) {
      // Ejecutar petición DELETE
      console.log("Elimino categoría con id: " + selectedCategoryId);
    } else {
      console.log("Cancelar");
    }
  };

  return (
    <>
      <div className="container mx-auto py-30">
        <BtnGoBack backTo={"/administracion"} />

        <h1 className="text-2xl text-blue-800 font-semibold my-5">
          Agregar Categoría
        </h1>

        <form /* onSubmit={handleSubmit} */ className="space-y-4">
          <div>
            <label className="block mb-1 font-semibold">
              Nombre de la Categoría
            </label>
            <input
              type="text"
              name="nombre"
              className={`w-full border px-3 py-2 rounded`}
              required
            />
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 cursor-pointer"
          >
            Agregar Categoría
          </button>
        </form>

        <div className="flex justify-between">
          <h1 className="text-2xl text-blue-800 font-semibold my-5">
            Lista de categorías
          </h1>
          <button
            className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 cursor-pointer"
            onClick={handleEditarClick}
          >
            {editar ? "Guardar cambios" : "Editar"}
          </button>
        </div>

        <table className="min-w-full bg-white border border-gray-200 rounded shadow">
          <thead>
            <tr className="bg-gray-100 text-left text-sm font-semibold text-gray-700">
              <th className="px-4 py-2 border-b">ID</th>
              <th className="px-4 py-2 border-b">Nombre</th>
              <th className="px-4 py-2 border-b text-center">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category) => (
              <tr key={category.id} className="hover:bg-gray-50">
                <td className="px-4 py-2 border-b">{category.id}</td>
                <td className="px-4 py-2 border-b w-[300px]">
                  {editar ? (
                    <input
                      type="text"
                      value={editValues[category.id]}
                      onChange={(e) =>
                        handleInputChange(category.id, e.target.value)
                      }
                      className="border border-gray-300 rounded px-2 py-1 w-full"
                    />
                  ) : (
                    editValues[category.id]
                  )}
                </td>
                <td className="px-4 py-2 border-b space-x-2 text-center">
                  <button
                    onClick={() => {
                      setSelectedCategoryId(category.id);
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
