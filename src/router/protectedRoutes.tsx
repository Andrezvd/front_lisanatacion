import React, { ReactNode } from "react";
import AccessDenied from "./accesoDenegado"; // Asegúrate de tener este componente

interface ProtectedRouteProps {
  children: ReactNode;
  /** Rol o roles permitidos para acceder */
  roleRequired?: string | string[];
}

/**
 * Protege rutas comprobando:
 * 1. Si el rol del usuario está dentro de los permitidos
 */
const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  children,
  roleRequired,
}) => {
  const userRole = localStorage.getItem("userRole");

  // Si no hay rol o el rol no está permitido → acceso denegado
  if (!userRole || (roleRequired && !roleRequired.includes(userRole))) {
    return <AccessDenied />;
  }

  // Si tiene el rol adecuado → renderiza la ruta
  return <>{children}</>;
};

export default ProtectedRoute;
