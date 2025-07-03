import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { NavBarComponent } from "../components/NavBarComponent";
import { IndexPage } from "../page/IndexPage";
import { ProductPage } from "../page/ProductPage";
import { FooterComponent } from "../components/FooterComponent";
import { AdminPage } from "../page/AdminPage";
import { AddProduct } from "../components/AddProduct/AddProduct";
import { ReservationDetailContainer } from "../components/ReservationDetailContainer/ReservationDetailContainer";
import { LoginScreen } from "../components/LoginScreen/LoginScreen";
import { RegisterScreen } from "../components/RegisterScreen/RegisterScreen";
import { AddCategory } from "../components/AddCategory/AddCategory";
import { ProtectedRoute } from "./ProtectedRoute";
import NoMobile from "../components/ProtectedAdmin/NoMobile";
import { ProductList } from "../components/ProductList/ProductList";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <div className="flex flex-col justify-between min-h-screen">
        <NavBarComponent />

        <Routes>
          <Route path="/" element={<IndexPage />}></Route>
          <Route path="/items/:itemId" element={<ProductPage />}></Route>
          <Route
            path="/reservar/:itemId"
            element={<ReservationDetailContainer />}
          ></Route>
          <Route
            path="/administracion"
            element={
              <ProtectedRoute>
                <AdminPage />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="/administracion/listarProductos"
            element={
              <ProtectedRoute>
                <ProductList />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="/administracion/agregarProducto"
            element={
              <ProtectedRoute>
                <AddProduct />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="/administracion/agregarCategoria"
            element={
              <ProtectedRoute>
                <AddCategory />
              </ProtectedRoute>
            }
          ></Route>
          <Route path="/no-mobile" element={<NoMobile />} />
          {/* <Route path="/no-access" element={<NoAccess />} /> */}
          <Route path="/registrar" element={<RegisterScreen />}></Route>
          <Route path="/iniciarSesion" element={<LoginScreen />}></Route>
          <Route path="/*" element={<Navigate to="/" />}></Route>
        </Routes>

        <FooterComponent />
      </div>
    </BrowserRouter>
  );
};
