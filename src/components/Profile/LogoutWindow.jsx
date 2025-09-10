import { useState } from "react";
import { ConfirmationMessageLogout } from "../ConfirmationMessage/ConfirmationMessageLogout";

export const LogoutWindow = () => {
  const [message, setMessage] = useState(false);
  console.log(message);

  const handleOnClose = (confirmed) => {
    if (confirmed) {
      console.log("Ejecuto cierre de sesión");
    } else {
      setMessage(false);
    }
  };

  return (
    <>
      <h3 className="panel-title">CERRAR SESIÓN</h3>
      <div>
        <button
          className="btn-logout"
          onClick={() => {
            setMessage(true);
          }}
        >
          Cerrar sesión
        </button>
      </div>
      {message && <ConfirmationMessageLogout onClose={handleOnClose} />}
    </>
  );
};
