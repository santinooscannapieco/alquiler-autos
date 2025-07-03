export const ConfirmationMessageDelete = ({ title, itemSelected, onClose }) => {
  console.log(itemSelected);

  return (
    <>
      <div className="flex justify-center items-center fixed inset-0 z-1000">
        <div className="p-8 rounded bg-white border border-black shadow-2xl">
          <h2 className="text-xl font-semibold w-80 my-2 text-center">
            {title}
          </h2>
          <hr />
          <div className="flex flex-col items-center">
            <h6 className="text-lg">{itemSelected.name}</h6>
            {itemSelected.imagePaths != null && (
              <img
                className="w-auto h-25"
                src={itemSelected.imagePaths[0]}
                alt=""
              />
            )}
          </div>
          <div className="flex gap-5 justify-center mt-5">
            <button
              className="bg-blue-800 text-white p-2 rounded-lg cursor-pointer"
              onClick={() => onClose(true)}
            >
              Confirmar
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
