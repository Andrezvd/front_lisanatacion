import { Routes, Route } from "react-router-dom";
import Home from "./templates/home";
import AdminPanel from "./templates/adminPanel";
import ProtectedRoute from "./router/protectedRoutes";
import TrainersPanel from "./templates/trainersPanel"

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
    </Routes>
  );
}

export default App;
