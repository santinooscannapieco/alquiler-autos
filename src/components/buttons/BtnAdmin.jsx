export const BtnAdmin = ({ text, icono }) => {
  return (
    <button className="flex flex-col items-center w-[200px] h-[150px] p-5 text-white bg-blue-700 hover:bg-blue-500 rounded-xl cursor-pointer">
      {icono}
      <div className="content-center">
        <p className="text-lg font-semibold">{text}</p>
      </div>
    </button>
  );
};
