import React from "react";

const LogoutButton: React.FC = () => {
  const handleClick = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userRole");
    window.location.href = "/";
  };

  return (
    <button onClick={handleClick} style={{ position: "fixed", top: 200, right: 10 }}>
      Logout
    </button>
  );
};

export default LogoutButton;