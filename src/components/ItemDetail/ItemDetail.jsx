import { useEffect, useState } from "react";
import { BtnGoBack } from "../buttons/BtnGoBack";
import { Link } from "react-router";
import { getData } from "../../services/api";

export const ItemDetail = ({ itemId }) => {
  const [showGallery, setShowGallery] = useState(false);

  const [producto, setProducto] = useState([]);

  const loadProducto = async () => {
    try {
      const data = await getData(`/autos/${itemId}`);
      console.log(data);
      setProducto(data);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    loadProducto();
  }, []);

  return (
    <>
      <section className="container lg:mx-auto mx-5 py-30 w-full">
        <BtnGoBack backTo={"/"} />

        <div className="flex flex-col gap-10">
          <h3 className="md:text-4xl md:text-start text-center text-2xl font-bold">
            {producto.name}
          </h3>

          <div className="flex justify-between items-center gap-5">
            <p className="md:text-2xl text-xl">
              Precio por hora: $ {producto.pricePerHour}
            </p>
            <Link
              to={`/reservar/${itemId}`}
              className="py-2 px-5 lg:py-4 lg:px-10 text-lg lg:text-2xl rounded-md cursor-pointer bg-blue-700 hover:bg-blue-400 text-white"
            >
              Seleccionar
            </Link>
          </div>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-1 items-center overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src={producto.imagePaths}
              alt="imagen"
            />
            <div className="grid grid-cols-2 gap-1 items-center overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src={producto.imagePaths}
                alt="imagen"
              />
              <img
                className="w-full h-full object-cover"
                src={producto.imagePaths}
                alt="imagen"
              />
              <img
                className="w-full h-full object-cover"
                src={producto.imagePaths}
                alt="imagen"
              />

              <div className="relative w-full h-full">
                <img
                  className="w-full h-full object-cover"
                  src={producto.imagePaths}
                  alt="imagen"
                />
                <button
                  className="absolute inset-0 bg-[rgba(0,0,0,0.8)] text-white text-xl font-semibold flex items-center justify-center hover:bg-opacity-60 transition cursor-pointer"
                  onClick={() => setShowGallery(true)}
                >
                  Ver más
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-10 lg:grid lg:grid-cols-2 lg:gap-1 lg:mt-5">
            <div className="container px-5">
              <h3 className="mb-5 text-2xl font-semibold">Características:</h3>
              {producto.characteristics != null &&
                producto.characteristics.map((ch) => (
                  <div key={ch} className="flex gap-2">
                    <p>✓</p>
                    <p className="text-lg">{ch}</p>
                  </div>
                ))}
            </div>
            <div className="container px-5">
              <h3 className="mb-5 text-2xl font-semibold">Descripción:</h3>
              <p className="text-lg">{producto.description}</p>
            </div>
          </div>
        </div>
      </section>

      {showGallery && (
        <div className="fixed inset-0 z-50 bg-[rgba(0,0,0,0.8)] flex items-center justify-center">
          <div className="bg-white p-5 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto lg:mx-auto mx-5">
            <button
              className="mb-4 px-2 text-white font-bold cursor-pointer bg-red-500 rounded hover:bg-red-300"
              onClick={() => setShowGallery(false)}
            >
              ✕
            </button>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {producto.imgagePaths.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`img-${index}`}
                  className="w-full h-full object-cover rounded"
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
