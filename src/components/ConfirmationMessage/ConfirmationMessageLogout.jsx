export const ConfirmationMessageLogout = ({ onClose }) => {
  return (
    <>
      <div className="flex justify-center items-center fixed inset-0 z-1000">
        <div className="p-8 rounded bg-white border border-black shadow-2xl">
          <h2 className="text-xl font-semibold w-80 my-2">Cerrar sesión</h2>
          <hr />
          <div className="flex flex-col">
            <p className="text-lg">¿Seguro queres cerrar sesión?</p>
          </div>

          <div className="flex gap-5 justify-center mt-5">
            <button
              className="bg-blue-700 text-white p-2 rounded-lg cursor-pointer"
              onClick={() => onClose(true)}
            >
              Cerrar sesión
            </button>
            <button
              className="bg-red-800 text-white p-2 rounded-lg cursor-pointer"
              onClick={() => onClose(false)}
            >
              Cancelar
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
