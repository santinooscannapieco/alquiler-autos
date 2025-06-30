import { useParams } from "react-router";
import { productos } from "../../js/productos";
import { ItemDetail } from "../ItemDetail/ItemDetail";

export const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const item = productos.find(
    (producto) => producto.item_id === parseInt(itemId)
  );

  return (
    <>
      <ItemDetail item={item} />
    </>
  );
};
