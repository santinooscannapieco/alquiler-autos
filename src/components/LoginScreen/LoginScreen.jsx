import { Link } from "react-router";
import { BtnGoBack } from "../buttons/BtnGoBack";

export const LoginScreen = () => {
  return (
    <>
      <div className="flex justify-center items-center fixed inset-0 z-1000 bg-blue-600">
        <div className="p-8 rounded bg-white">
          <BtnGoBack backTo={"/"} />
          <h2 className="text-2xl font-semibold w-80 my-2">Inicia sesión</h2>
          <hr />

          <form
            /* onSubmit={handleSubmit} */ className="flex flex-col mt-4 gap-2"
          >
            <input
              className="border p-2 rounded-md"
              type="email"
              placeholder="Email"
              //value={values.email}
              //onChange={handleInputChange}
              name="email"
            />
            <input
              className="border p-2 rounded-md"
              type="password"
              placeholder="Contraseña"
              //value={values.password}
              //onChange={handleInputChange}
              name="password"
            />
            <button
              className="mt-4 py-2 text-gray-50 bg-blue-700 hover:bg-blue-500 border-none rounded-lg cursor-pointer"
              type="submit"
            >
              Ingresar
            </button>
          </form>

          <Link to={"/registrar"}>
            <button
              //onClick={() => register(values)}
              className="mt-4 p-2 text-gray-50 bg-gray-800 hover:bg-gray-600 border-none rounded-md cursor-pointer"
              type="submit"
            >
              Registrar
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};
