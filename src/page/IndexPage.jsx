import { InputComponent } from "../components/InputComponent";
/* import img1 from "../assets/fondoo.jpg"; */
import img2 from "../assets/fondo2.png";
import { CategoriesComponent } from "../components/CategoriesComponent";
import { ItemListContainer } from "../components/ItemListContainer/ItemListContainer";

export const IndexPage = () => {
  return (
    <>
      <div className="pt-8">
        <div className="w-full">
          <div
            className="bg-cover bg-center h-[600px] flex flex-col justify-center items-center rounded-2xl shadow-md"
            style={{ backgroundImage: `url(${img2})` }}
          >
            <h1 className="text-white text-3xl lg:text-4xl font-bold mb-4 text-center drop-shadow-lg">
              ALQUILER DE AUTOS <br /> BUENOS AIRES
            </h1>
            <InputComponent />
          </div>
          <CategoriesComponent />

          <ItemListContainer />
        </div>
      </div>
    </>
  );
};
