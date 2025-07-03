import { BtnGoBack } from "../buttons/BtnGoBack";
import img1 from "../../assets/bmw1.png";
import { BtnEdit } from "../buttons/BtnEdit";
import { useEffect, useState } from "react";
import { getData } from "../../services/api";

export const ReservationDetail = ({ itemId }) => {
  const [producto, setProducto] = useState([]);
  /* const [category, setCategory] = useState([]); */

  const loadProducto = async () => {
    try {
      const data = await getData(`/autos/${itemId}`);
      console.log(data);
      setProducto(data);
      /* loadCategory(); */
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    loadProducto();
  }, []);

  /* const loadCategory = async () => {
    // PARA QUE ESTO FUNCIONE FALTA CREAR LA PETICION findById en el back
    try {
      const data = await getData(`/categorias/${producto.category_id}`);
      console.log(data);
      setCategory(data);
    } catch (err) {
      console.error(err.message);
    }
  }; */

  return (
    <>
      <section className="container lg:mx-auto mx-5 py-30">
        <BtnGoBack backTo={"/"} />

        <div className="flex flex-col gap-10">
          <h3 className="md:text-4xl md:text-start text-center text-2xl font-bold">
            Revisar y reservar
          </h3>
          <div className="flex flex-col gap-10 items-center lg:flex-row lg:items-start lg:justify-between">
            <div className="bg-blue-200 w-[500px] h-full">
              <div className="py-6 px-8 border-b-1 border-gray-400">
                <h4 className="text-2xl font-bold">Detalles del alquiler</h4>
              </div>
              <div className="py-6 px-8 border-b-1 border-gray-400">
                <div className="flex justify-between mb-2">
                  <h6 className="text-md font-semibold">FECHAS Y HORAS</h6>
                  <BtnEdit />
                </div>
                <div className="flex flex-col gap-4">
                  <div>
                    <p className="text-sm font-semibold">Recogida:</p>
                    <p>Miércoles, Ocutbre 29, 2025</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Devolución:</p>
                    <p>Día, MM dd, yyyy</p>
                  </div>
                </div>
              </div>
              <div className="py-6 px-8 border-b-1 border-gray-400">
                <div className="flex justify-between mb-2">
                  <h6 className="text-md font-semibold">
                    OFICINA DE RECOGIDA Y DEVOLUCIÓN
                  </h6>
                  {/* <BtnEdit /> */}
                </div>
                <div className="flex flex-col gap-4">
                  <div>
                    <p className="text-lg">
                      Aeropuerto Internacional Ezeiza (Bs As)
                    </p>
                    <p className="text-sm">
                      AU Tte. Gral. Pablo Riccheri Km 33,5,
                    </p>
                    <p className="text-sm">
                      Argentina, Provincia de Buenos Aires, Ezeiza
                    </p>
                  </div>
                </div>
              </div>
              <div className="py-6 px-8 border-b-1 border-gray-400">
                <div className="flex justify-between mb-2">
                  <h6 className="text-md font-semibold">VEHÍCULO</h6>
                  <BtnEdit />
                </div>
                <div className="flex flex-row justify-between gap-4">
                  <div className="content-center">
                    <p className="text-lg font-bold">{/* {category.name} */}</p>
                    <p className="text-md font-semibold">{producto.name}</p>
                    <p>{producto.carBrand}</p>
                  </div>
                  <img
                    className="w-32 xl:w-60 rounded-4xl"
                    src={img1}
                    alt="img auto"
                  />
                </div>
              </div>
              <div className="py-6 px-8">
                <div className="flex justify-between items-center mb-2">
                  <h6 className="text-xl font-semibold">
                    PRECIO TOTAL ESTIMADO:
                  </h6>

                  {/* Falta multiplicar por cantidad de días */}
                  <p className="text-2xl font-bold">{producto.pricePerHour}</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-5 w-[500px] lg:w-[900px]">
              <div className="bg-blue-200 col-span-2 py-8 px-12">
                <h4 className="text-2xl font-bold mb-5">
                  Detalles del conductor
                </h4>
                <form className="flex flex-col gap-4">
                  <div>
                    <p className="text-lg">Nombre</p>
                    <input
                      className="p-2 border rounded-xl bg-white w-full"
                      type="text"
                      name=""
                      id=""
                    />
                  </div>
                  <div>
                    <p className="text-lg">Apellido</p>
                    <input
                      className="p-2 border rounded-xl bg-white w-full"
                      type="text"
                      name=""
                      id=""
                    />
                  </div>
                  <div>
                    <p className="text-lg">Número de teléfono</p>
                    <input
                      className="p-2 border rounded-xl bg-white w-full"
                      type="text"
                      name=""
                      id=""
                    />
                  </div>
                </form>
              </div>
              <div className="bg-blue-200 col-span-2 py-8 px-12">
                <h4 className="text-2xl font-bold mb-5">Conductor adicional</h4>
                <form className="flex flex-col gap-4" action="">
                  <div>
                    <p className="text-lg">Nombre</p>
                    <input
                      className="p-2 border rounded-xl w-full bg-white cursor-not-allowed opacity-50 border-gray-300 focus:border-blue-500 focus:ring-blue-50"
                      type="text"
                      disabled
                      name=""
                      id=""
                    />
                  </div>
                  <div>
                    <p className="text-lg">Apellido</p>
                    <input
                      className="p-2 border rounded-xl w-full bg-white cursor-not-allowed opacity-50 border-gray-300 focus:border-blue-500 focus:ring-blue-50"
                      type="text"
                      disabled
                      name=""
                      id=""
                    />
                  </div>
                  <p className="text-red-500 mt-4 text-2xl text-center">
                    *Esta opción no está disponible en este momento*
                  </p>
                </form>
              </div>
              <div className="flex flex-col text-center lg:block lg:text-start bg-blue-200 py-8 px-12">
                <h4 className="text-2xl font-bold mb-5">Complete su reserva</h4>
                <div className="flex justify-between items-center">
                  <p className="text-xl lg:text-3xl">Total estimado a pagar:</p>
                  {/* CALCULAR precio total */}
                  {/* Hacer función que haga el cálculo */}
                  <p className="text-2xl lg:text-3xl font-black">$ 119.94</p>
                </div>
                <button className="mt-5 text-lg lg:text-xl text-white bg-blue-800 px-20 py-4 rounded-lg hover:bg-blue-600 cursor-pointer">
                  RESERVAR AHORA
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
