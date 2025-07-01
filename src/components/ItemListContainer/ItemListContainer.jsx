import { ItemList } from "../ItemList/ItemList";
import useFetch from "../../hooks/useFetch";

export const ItemListContainer = () => {
  const { data, loading, error } = useFetch("http://localhost:8080/autos");

  console.log("Respuesta de la API", data);

  return (
    <>
      <section className="container mx-auto py-20">
        {loading ? (
          <h3 className="text-center text-4xl text-blue-800 font-semibold">
            Cargando...
          </h3>
        ) : (
          <ItemList productos={data} />
        )}
      </section>
    </>
  );
};
