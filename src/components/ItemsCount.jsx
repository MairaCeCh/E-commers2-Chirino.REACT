import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Volver from "./Volver";

export const ItemsCount = ({ stock, onAdd }) => {
  const [count, setCount] = useState(1);
  const navigate = useNavigate();

  const handleIncrease = () => {
    if (count < stock) {
      setCount((prev) => prev + 1);
    }
  };

  const handleDecrease = () => {
    if (count > 1) {
      setCount((prev) => prev - 1);
    }
  };

  const handleAdd = () => {
    onAdd(count);
    setCount(1);
  };

  return (
    <>
      <div className="d-flex flex-row justify-content-center">
        <button onClick={handleIncrease}>+</button>
        <h4 className="m-2">{count}</h4>
        <button onClick={handleDecrease}>-</button>
      </div>
      <hr />
      <div className="d-flex flex-row justify-content-center m-3 align-items-center">
        <button style={{ border: "none", margin: "5px" }} onClick={handleAdd}>
          Al carrito
        </button>
        <Volver />
      </div>
    </>
  );
};
