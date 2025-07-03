import { useParams } from "react-router";
import { ItemDetail } from "../ItemDetail/ItemDetail";

export const ItemDetailContainer = () => {
  const { itemId } = useParams();

  return (
    <>
      <ItemDetail itemId={itemId} />
    </>
  );
};
