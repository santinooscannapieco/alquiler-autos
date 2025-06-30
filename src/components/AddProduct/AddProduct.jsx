import { useState } from "react";
import { BtnGoBack } from "../buttons/BtnGoBack";

export const AddProduct = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    descripcion: "",
    imagenes: [],
  });

  const [previewImgs, setPreviewImgs] = useState([]);
  /* const [errorNombre, setErrorNombre] = useState(false);
  const [alerta, setAlerta] = useState("");

  const productosExistentes = ["Camisa", "Pantalón", "Zapatilla"]; */

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "imagenes") {
      const filesArray = Array.from(files);

      // Agregar nuevas imágenes al estado
      setFormData((prev) => ({
        ...prev,
        imagenes: [...prev.imagenes, ...filesArray],
      }));

      // Crear previews
      const newPreviews = filesArray.map((file) => ({
        file,
        url: URL.createObjectURL(file),
      }));

      setPreviewImgs((prev) => [...prev, ...newPreviews]);
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleEliminarImagen = (index) => {
    const nuevasImagenes = [...formData.imagenes];
    nuevasImagenes.splice(index, 1);

    const nuevasPreviews = [...previewImgs];
    URL.revokeObjectURL(nuevasPreviews[index].url); // Limpia la memoria
    nuevasPreviews.splice(index, 1);

    setFormData((prev) => ({ ...prev, imagenes: nuevasImagenes }));
    setPreviewImgs(nuevasPreviews);
  };

  /* const handleSubmit = (e) => {
    e.preventDefault();
    const nombreExiste = productosExistentes.includes(formData.nombre.trim());

    if (nombreExiste) {
      setErrorNombre(true);
      setAlerta("El nombre del producto ya existe.");
    } else {
      setErrorNombre(false);
      setAlerta("");

      // Podés usar FormData si vas a enviar archivos al backend
      const data = new FormData();
      data.append("nombre", formData.nombre);
      data.append("descripcion", formData.descripcion);
      formData.imagenes.forEach((img) => data.append("imagenes", img));

      console.log("Formulario listo para enviar:", formData);
      alert("Producto agregado correctamente");
    }
  }; */

  return (
    <>
      <div className="container mx-auto py-30">
        <BtnGoBack backTo={"/administracion"} />

        <h1 className="text-2xl text-blue-800 font-semibold my-5">
          Agregar producto
        </h1>

        <form /* onSubmit={handleSubmit} */ className="space-y-4">
          <div>
            <label className="block mb-1 font-semibold">
              Nombre del producto
            </label>
            <input
              type="text"
              name="nombre"
              /* value={formData.nombre}
              onChange={handleChange} */
              className={
                `w-full border px-3 py-2 rounded` /* ${
                errorNombre ? "border-red-500" : "border-gray-300"
              } */
              }
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">Descripción</label>
            <textarea
              name="descripcion"
              /* value={formData.descripcion}
              onChange={handleChange} */
              className="w-full border border-gray-300 px-3 py-2 rounded"
              rows="4"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">Imágenes</label>
            <input
              type="file"
              name="imagenes"
              onChange={handleChange}
              className="w-full border bg-gray-300 p-2 cursor-pointer rounded-xl"
              multiple
              accept="image/*"
            />
          </div>

          {previewImgs.length > 0 && (
            <div className="grid grid-cols-4 gap-4 mt-4">
              {previewImgs.map((img, index) => (
                <div key={index} className="relative group">
                  <img
                    src={img.url}
                    alt={`preview-${index}`}
                    className="w-full h-24 object-cover rounded border"
                  />
                  <button
                    type="button"
                    onClick={() => handleEliminarImagen(index)}
                    className="absolute top-1 right-1 bg-red-500 text-white text-xs px-2 py-1 rounded opacity-80 hover:opacity-100"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
          )}

          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Agregar Producto
          </button>
        </form>
      </div>
    </>
  );
};
