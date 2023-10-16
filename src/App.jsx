import { Route, Routes } from "react-router-dom";
import "./App.css";
import MiFormacion from "./views/MiFormacion/MiFormacion";
import AvancePorTema from "./views/AvancePorTema/AvancePorTema";
import AvamcePorPersona from "./views/AvancePorPersona/AvancePorPersona";
import Detalle from "./views/Detalle/Detalle";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MiFormacion />} />
        <Route path="/3" element={<AvancePorTema />} />
        <Route path="/2" element={<AvamcePorPersona />} />
        <Route path="/detail" element={<Detalle />} />
      </Routes>
    </>
  );
}

export default App;
