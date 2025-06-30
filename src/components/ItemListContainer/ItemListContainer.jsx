import { ItemList } from "../ItemList/ItemList";
import { productos } from "../../js/productos";

export const ItemListContainer = () => {
  return (
    <>
      <ItemList productos={productos} />
    </>
  );
};
