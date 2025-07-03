// TODO: Traer datos de reserva hasta el momento, días y auto

import { useParams } from "react-router";
import { ReservationDetail } from "../ReservationDetail/ReservationDetail";

export const ReservationDetailContainer = () => {
  const { itemId } = useParams();

  return (
    <>
      <ReservationDetail itemId={itemId} />
    </>
  );
};
