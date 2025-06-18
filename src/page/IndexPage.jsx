import { InputComponent } from "../components/InputComponent";
import img from "../assets/fondoo.jpg";

export const IndexPage = () => {
  return (
    <>
      <div className="max-w-screen-xl mx-auto mt-8 px-4">
        {/* Contenedor con fondo */}
        <div
          className="bg-cover bg-center h-[400px] flex flex-col justify-center items-center rounded-lg shadow-md"
          style={{ backgroundImage: `url(${img})` }}
        >
          <h1 className="text-blue-800 text-4xl font-bold mb-4 text-center drop-shadow-lg">
            Alquiler de autos
          </h1>
          <InputComponent />
        </div>
      </div>
    </>
  );
};
