import { useEffect } from "react";
import api from "../services/api";

function Prueba() {
  useEffect(() => {
    api.get("/api/v1/test") 
      .then(response => console.log(response.data))
      .catch(error => console.error("Error:", error));
  }, []);

  return <h1>¡Conectado al backend! 🎉</h1>;
}

export default Prueba;
