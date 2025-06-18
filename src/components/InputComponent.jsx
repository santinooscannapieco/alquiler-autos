export const InputComponent = () => {
  return (
    <>
      <div className="text-center flex justify-center gap-5 mt-5">
        <input
          type="text"
          placeholder="Escribí tu ciudad"
          className="border border-white bg-white rounded-md pl-2 w-[500px]"
        />
        <button className="p-2 rounded-md cursor-pointer bg-blue-700 hover:bg-blue-500 text-white">
          Buscar
        </button>
      </div>
    </>
  );
};
