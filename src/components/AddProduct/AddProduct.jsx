import { useEffect, useState } from "react";
import { BtnGoBack } from "../buttons/BtnGoBack";
import { getData, postData } from "../../services/api";
import { ConfirmationMessageAdd } from "../ConfirmationMessage/ConfirmationMessageAdd";
import { Loader } from "../Loader/Loader";

export const AddProduct = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    carBrand: "",
    pricePerHour: 0,
    characteristics: [],
    category_id: "",
  });

  const [loading, setLoading] = useState(false);
  const [alertCompleteForm, setAlertCompleteForm] = useState(false);
  const [images, setImages] = useState([]);
  const [previewImgs, setPreviewImgs] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [characteristicsInputs, setCharacteristicsInputs] = useState([""]);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const loadCategorias = async () => {
    try {
      const data = await getData("/categorias");
      setCategorias(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    loadCategorias();
  }, []);

  const handleDeleteInput = (index) => {
    const nuevoArray = [...characteristicsInputs];
    nuevoArray.splice(index, 1);

    setCharacteristicsInputs(nuevoArray);
  };

  const handleAddInput = (e) => {
    e.preventDefault();
    setCharacteristicsInputs((prev) => [...prev, ""]);
  };

  const handleChangeCharacteristics = (index, value) => {
    const updated = [...characteristicsInputs];
    updated[index] = value;
    setCharacteristicsInputs(updated);
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "images") {
      const filesArray = Array.from(files);

      // Agregar nuevas imágenes al estado
      setImages((prev) => [...prev, ...filesArray]);

      // Crear previews
      const newPreviews = filesArray.map((file) => ({
        file,
        url: URL.createObjectURL(file),
      }));

      setPreviewImgs((prev) => [...prev, ...newPreviews]);
    } else if (name === "category_id") {
      setFormData((prev) => ({
        ...prev,
        category_id: parseInt(value),
      }));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleEliminarImagen = (index) => {
    const nuevasImagenes = [...images];
    nuevasImagenes.splice(index, 1);

    const nuevasPreviews = [...previewImgs];
    URL.revokeObjectURL(nuevasPreviews[index].url); // Limpia la memoria
    nuevasPreviews.splice(index, 1);

    setImages(nuevasImagenes);
    setPreviewImgs(nuevasPreviews);
  };

  const checkForm = (e) => {
    e.preventDefault();

    const checkCharacteristics = characteristicsInputs.every((ch) => ch !== "");

    console.log("name:", formData.name);
    console.log("description:", formData.description);
    console.log("carBrand:", formData.carBrand);
    console.log("pricePerHour:", formData.pricePerHour);
    console.log("category_id:", formData.category_id);
    console.log("characteristics:", formData.characteristics);
    console.log("checkCharacteristics:", checkCharacteristics);

    if (
      formData.name != null &&
      formData.description != null &&
      formData.carBrand != null &&
      formData.pricePerHour != 0 &&
      checkCharacteristics != false &&
      formData.category_id != null
    ) {
      setShowConfirmation(true);
    } else {
      setAlertCompleteForm(true);
    }
  };

  const handleConfirmationClose = async (confirmed) => {
    setShowConfirmation(false);
    if (!confirmed) return;

    try {
      handleSubmit();
    } catch (err) {
      console.error("Error al crear:", err.message);
      alert("No se pudo crear el ítem");
    }
  };

  const handleSubmit = async () => {
    const finalFormData = {
      ...formData,
      characteristics: characteristicsInputs,
    };

    const formToReturn = new FormData();
    formToReturn.append("car", JSON.stringify(finalFormData));

    images.forEach((img) => {
      formToReturn.append("images", img);
    });

    try {
      setLoading(true);
      const res = await postData("/autos", formToReturn);
      resetForm();
      console.log("Auto creado con imágenes:", res);
      // Se puede agregar un alert de creado
    } catch (err) {
      console.error(err);
    }
  };

  // Reseteo todo el formulario
  const resetForm = () => {
    setFormData({
      name: "",
      description: "",
      carBrand: "",
      pricePerHour: 0,
      characteristics: [],
      category_id: "",
    });
    setImages([]);
    setPreviewImgs([]);
    setCharacteristicsInputs([""]);
    setLoading(false);
    setAlertCompleteForm(false);
  };

  return (
    <>
      <div className="container mx-auto py-30">
        <BtnGoBack backTo={"/administracion"} />

        <h1 className="text-2xl text-blue-800 font-semibold my-5">
          Agregar producto
        </h1>

        <div /*  onSubmit={handleSubmit} */ className="space-y-4">
          {alertCompleteForm && (
            <h3 className="text-lg text-red-700">
              *Por favor complete todos los campos antes de crear el producto
            </h3>
          )}
          <div>
            <label className="block mb-1 font-semibold">
              Nombre del producto
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={"w-full border px-3 py-2 rounded"}
              required
            />
          </div>
          <div className="grid grid-cols-5 gap-8">
            <div>
              <label className="block mb-1 font-semibold">Precio por día</label>
              <input
                type="number"
                id="pricePerHour"
                name="pricePerHour"
                value={formData.pricePerHour}
                onChange={handleChange}
                className="border rounded px-3 py-2 w-[100px]"
                min="0"
                max="1000"
                step="1"
                required
              />
            </div>
            <div className="col-span-2">
              <label className="block mb-1 font-semibold">Marca</label>
              <input
                type="text"
                name="carBrand"
                value={formData.carBrand}
                onChange={handleChange}
                className={`w-full border px-3 py-1.5 rounded`}
                required
              />
            </div>
            <div className="col-span-2">
              <label className="block mb-1 font-semibold">Categoría</label>
              <select
                id="category_id"
                name="category_id"
                value={formData.category_id}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded"
                required
              >
                <option value="">Seleccionar categoría...</option>
                {categorias.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block mb-1 font-semibold">Descripción</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full border border-gray-300 px-3 py-2 rounded"
              rows="4"
              required
            />
          </div>
          <div>
            <p className="block mb-1 font-semibold">Agregar características</p>
            <div className="flex flex-col gap-2">
              {characteristicsInputs.map((value, index) => (
                <div key={index} className="flex gap-2">
                  <input
                    type="text"
                    className="w-full border px-3 py-2 rounded"
                    value={value}
                    onChange={(e) =>
                      handleChangeCharacteristics(index, e.target.value)
                    }
                    required
                  />
                  <button
                    onClick={() => handleDeleteInput(index)}
                    className="text-white p-2 rounded bg-black hover:bg-blue-900 cursor-pointer"
                  >
                    X
                  </button>
                </div>
              ))}

              <button
                onClick={handleAddInput}
                className="text-white p-2 rounded bg-black hover:bg-blue-900 cursor-pointer"
              >
                Más inputs
              </button>
            </div>
          </div>

          <div>
            <label className="block mb-1 font-semibold">Imágenes</label>
            <input
              type="file"
              name="images"
              onChange={handleChange}
              className="w-full border bg-gray-300 p-2 cursor-pointer rounded-xl"
              multiple
              accept="image/*"
            />
          </div>

          {previewImgs.length > 0 && (
            <div className="grid grid-cols-8 gap-4 mt-4">
              {previewImgs.map((img, index) => (
                <div key={index} className="relative group">
                  <img
                    src={img.url}
                    alt={`preview-${index}`}
                    className="w-full h-[100px] object-cover rounded border"
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
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 cursor-pointer"
            onClick={checkForm}
          >
            Crear producto
          </button>
        </div>

        {loading && <Loader />}

        {showConfirmation && (
          <ConfirmationMessageAdd
            title="¿Seguro que querés crear este item?"
            itemSelected={formData}
            onClose={handleConfirmationClose}
          />
        )}
      </div>
    </>
  );
};
