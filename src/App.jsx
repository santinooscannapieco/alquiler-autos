import "./App.css";
import { NavBarComponent } from "./components/NavBarComponent";
import { IndexPage } from "./page/IndexPage";

function App() {
  return (
    <>
      <div className="">
        <NavBarComponent />
        <IndexPage />
      </div>
    </>
  );
}

export default App;
