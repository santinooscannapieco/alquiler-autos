export const InputComponent = () => {
  return (
    <>
      <div className="text-center flex flex-col lg:flex-row justify-center gap-5 mt-5">
        <input
          type="text"
          placeholder="Qué modelo buscas?"
          className="p-2 border border-white bg-white rounded-md lg:w-[500px] w-[300px]"
        />
        <button className="py-2 px-6 rounded-md cursor-pointer bg-blue-700 hover:bg-blue-500 text-white text-xl">
          Buscar
        </button>
      </div>
    </>
  );
};
