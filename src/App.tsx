import { Routes, Route } from "react-router-dom";
import Home from "./templates/home";
import AdminPanel from "./templates/adminPanel/adminPanel";
import ProtectedRoute from "./router/protectedRoutes";
import TrainersPanel from "./templates/trainersPanel"
import CursosPanel from "./templates/cursosPanel";
import EditarNoticia from "./templates/editarNoticia";

import GaleriaPanel from "./templates/galeriaPanel";


import GestionUsuarios from "./templates/adminPanel/gestionEntrenadores";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      {/* Sólo admins pueden entrar */}
      <Route
        path="/admin"
        element={
          <ProtectedRoute roleRequired="admin">
            <AdminPanel />
          </ProtectedRoute>
        }
      />
      <Route path="/trainersPanel" element={<TrainersPanel/>} />
      <Route path="/CursosPanel" element={<CursosPanel/>} />
      <Route path="/admin/noticia" element={<EditarNoticia />} />

      <Route path="/galeriaPanel" element={<GaleriaPanel />} />


      <Route path="/admin/gestionUsuarios" element={<GestionUsuarios />} />

    </Routes>
  );
}

export default App;
