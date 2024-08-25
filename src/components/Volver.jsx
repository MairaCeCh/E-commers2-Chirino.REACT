import React from "react";
import { useNavigate } from "react-router-dom";

const Volver = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button
        style={{
          border: "none",

          cursor: "pointer",
        }}
        onClick={() => navigate("/")}
      >
        Volver
      </button>
    </div>
  );
};

export default Volver;
