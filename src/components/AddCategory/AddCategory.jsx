import { useEffect, useState } from "react";
import { BtnGoBack } from "../buttons/BtnGoBack";
import { ConfirmationMessageDelete } from "../ConfirmationMessage/ConfirmationMessageDelete";
import { deleteData, getData, postData, putData } from "../../services/api";
import { ConfirmationMessageAdd } from "../ConfirmationMessage/ConfirmationMessageAdd";
import { Loader } from "../Loader/Loader";

export const AddCategory = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [newCategory, setNewCategory] = useState({ name: "" });
  const [showConfirmationAdd, setShowConfirmationAdd] = useState(false);
  const [alertErrorAdd, setAlertErrorAdd] = useState(false);

  const [isEditing, setIsEditing] = useState(false);
  const [categoryToEdit, setCategoryToEdit] = useState(null);
  const [editedName, setEditedName] = useState("");

  const [showConfirmationDelete, setShowConfirmationDelete] = useState(false);
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const [alertErrorList, setAlertErrorList] = useState();

  const loadProductos = async () => {
    try {
      const data = await getData("/categorias");
      setCategories(data);
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    loadProductos();
  }, []);

  const handleEditClick = (category) => {
    setCategoryToEdit(category);
    setEditedName(category.name);
    setIsEditing(true);
  };

  const handleSave = () => {
    if (categoryToEdit.name != editedName && editedName != "") {
      const updatedCategory = {
        ...categoryToEdit,
        name: editedName,
      };
      // Hacer PUT
      updateCategory(updatedCategory);
      console.log("Se editó la categoría con id: " + categoryToEdit.id);

      setCategories(
        categories.map((cat) => {
          if (cat.id === categoryToEdit.id) {
            return updatedCategory;
          } else {
            return cat;
          }
        })
      );
    } else {
      console.log(
        "No se actualizó porque no modificó el nombre o porque el nombre no puede estar vacío"
      );
    }
    setIsEditing(false);
    setCategoryToEdit(null);
  };

  const updateCategory = async (category) => {
    try {
      await putData("/categorias", category);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteClick = () => {
    setShowConfirmationDelete(true);
  };

  const handleConfirmationCloseDelete = async (confirmed) => {
    setShowConfirmationDelete(false);
    if (confirmed && selectedCategoryId !== null) {
      // Ejecutar petición DELETE
      try {
        await deleteData(`/categorias/${selectedCategoryId}`);

        setCategories((prev) =>
          prev.filter((item) => item.id !== selectedCategoryId)
        );
        console.log("Elimino categoría con id: " + selectedCategoryId);
        setSelectedCategoryId(null);
      } catch (err) {
        setAlertErrorList(true);
        console.error(err);
      }
    } else {
      console.log("Cancelar");
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setNewCategory({ name: value });
  };

  const handleAddClick = () => {
    if (newCategory.name != "") {
      setShowConfirmationAdd(true);
    }
  };

  const handleConfirmationCloseAdd = async (confirmed) => {
    setShowConfirmationAdd(false);
    if (confirmed) {
      try {
        handleSubmit();
      } catch (err) {
        console.error(err.message);
      }
    } else {
      setShowConfirmationAdd(false);
      console.log("cancelar");
    }
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const res = await postData("/categorias", newCategory);
      setNewCategory({ name: "" });
      await loadProductos();
      setAlertErrorAdd(false);
      setLoading(false);
      console.log("Categoría creada:", res);
    } catch (err) {
      setAlertErrorAdd(true);
      console.error(err);
    }
  };

  return (
    <>
      <div className="section">
        <BtnGoBack backTo={"/administracion"} />

        <h1 className="text-2xl text-blue-800 font-semibold my-5">
          Agregar Categoría
        </h1>
        {alertErrorAdd && (
          <p className="text-lg text-red-700">
            *Ya existe una categoría con ese nombre
          </p>
        )}

        <div className="space-y-4">
          <div>
            <label className="block mb-1 font-semibold">
              Nombre de la Categoría
            </label>
            <input
              type="text"
              name="nombre"
              value={newCategory.name}
              onChange={handleChange}
              className={`w-full border px-3 py-2 rounded`}
              required
            />
          </div>

          <button className="btn" onClick={handleAddClick}>
            Agregar Categoría
          </button>
        </div>

        <div className="flex justify-between">
          <h1 className="text-2xl text-blue-800 font-semibold my-5">
            Lista de categorías
          </h1>
        </div>
        {alertErrorList && (
          <>
            <p className="text-lg text-red-700">
              *Es probable que la categoría esté asociada con algún auto
            </p>
            <p className="text-lg text-red-700">
              *Para poder eliminarla debe modificar los autos que estén
              asociados
            </p>
          </>
        )}

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
                  {category.name}
                </td>
                <td className="px-4 py-2 border-b space-x-2 text-center">
                  <button
                    className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 cursor-pointer"
                    onClick={() => handleEditClick(category)}
                  >
                    Editar
                  </button>
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
        {showConfirmationAdd && (
          <ConfirmationMessageAdd
            title="¿Seguro que querés crear este item?"
            itemSelected={newCategory}
            onClose={handleConfirmationCloseAdd}
          />
        )}
        {loading && <Loader />}
        {showConfirmationDelete && (
          <ConfirmationMessageDelete
            title="¿Seguro que querés eliminar esta categoría?"
            itemSelected={categories.find(
              (cat) => cat.id == selectedCategoryId
            )}
            onClose={handleConfirmationCloseDelete}
          />
        )}
        {isEditing && (
          <div className="fixed inset-0 bg-blue-300 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded shadow-md w-96">
              <h3 className="text-lg font-semibold mb-4">Editar Categoría</h3>
              <input
                type="text"
                value={editedName}
                onChange={(e) => setEditedName(e.target.value)}
                className="border p-2 w-full mb-4"
              />
              <div className="flex justify-end space-x-2">
                <button
                  className="bg-gray-300 px-3 py-1 rounded"
                  onClick={() => setIsEditing(false)}
                >
                  Cancelar
                </button>
                <button
                  className="bg-blue-700 text-white px-3 py-1 rounded"
                  onClick={handleSave}
                >
                  Guardar
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
