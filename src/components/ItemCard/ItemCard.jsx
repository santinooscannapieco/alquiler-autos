import { Link } from "react-router";

export const ItemCard = ({ item }) => {
  return (
    <>
      <div className="w-[400px] h-[450px] flex flex-col justify-between rounded-2xl shadow-lg bg-white overflow-hidden">
        <div className="overflow-x-auto whitespace-nowrap space-x-4 flex pb-2">
          {item.imagePaths.map((imagen, index) => (
            <img
              key={index}
              src={imagen}
              alt="imagen"
              className="rounded-2xl"
            />
          ))}
        </div>
        <div className="px-4 py-3">
          <div>
            <h3 className="text-lg font-semibold mt-2 line-clamp-2">
              {item.carBrand} {item.name}
            </h3>
            <p className="mt-2 font-bold text-blue-700">
              Precio P/D: $ {item.pricePerHour}
            </p>
          </div>
        </div>

        <Link
          to={`/items/${item.id}`}
          className="mt-auto block text-center py-3 text-white bg-blue-600 hover:bg-blue-500 transition"
        >
          Ver más
        </Link>
      </div>
    </>
  );
};
