const user = {
  id: 1,
  firstname: "Santino",
  last_name: "Scannapieco",
  email: "san@gmail.com",
  car_reservation: null,
  rol: "USER",
};

export const Profile = () => {
  return (
    <>
      <h3 className="panel-title">PERFIL</h3>
      <div className="flex flex-col gap-2">
        <div className="w-[50px] h-[50px] bg-blue-700 text-white text-center text-2xl content-center rounded-full">
          SS
        </div>
        <div>
          <p>Nombre: </p>
          <input
            className="border rounded px-2"
            placeholder={user.firstname}
            type="text"
          />
        </div>
        <div>
          <p>Apellido: </p>
          <input
            className="border rounded px-2"
            placeholder={user.last_name}
            type="text"
          />
        </div>
        <div>
          <p>Email: </p>
          <input
            className="border rounded px-2"
            placeholder={user.email}
            type="text"
          />
        </div>
      </div>
    </>
  );
};
