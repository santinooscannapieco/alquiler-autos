export const InputComponent = () => {
  return (
    <>
      <div className="text-center flex flex-col lg:flex-row justify-center gap-5 mt-5">
        <input
          type="text"
          placeholder="Qué modelo buscas?"
          className="p-2 border border-white bg-white rounded-md lg:w-[500px] w-[300px]"
        />
        <button className="btn text-xl">Buscar</button>
      </div>
    </>
  );
};
