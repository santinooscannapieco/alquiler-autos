export const NavBarComponent = () => {
  return (
    <>
      <nav className="w-full">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center p-4">
          <a href="/" className="text-3xl text-blue-800">
            AlquilerAutos
          </a>
          <div className="flex gap-4 font-semibold">
            <button className="p-2 rounded-md cursor-pointer bg-blue-700 hover:bg-blue-500 text-white">
              <a href="">Crear cuenta</a>
            </button>
            <button className="p-2 rounded-md cursor-pointer border border-blue-700 hover:bg-blue-200 text-blue-700">
              <a href="">Iniciar sesión</a>
            </button>
          </div>
        </div>
        <div className="border-b-4 border-blue-700 w-full"></div>
      </nav>
    </>
  );
};
