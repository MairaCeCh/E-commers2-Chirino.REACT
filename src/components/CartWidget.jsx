import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MdShoppingCart } from "react-icons/md";
import { CartContext } from "../context/CartContext";

const CartWidget = () => {
  const { items } = useContext(CartContext);

  const totalItems = items.reduce((total, item) => total + item.quantity, 0);

  return (
    <Link
      to="/cart"
      style={{
        position: "relative",
        display: totalItems > 0 ? "block" : "none",
      }}
    >
      <MdShoppingCart className="carrito" />
      {totalItems > 0 && (
        <span
          style={{
            position: "absolute",
            top: "-10px",
            right: "-10px",
            background: "black",
            borderRadius: "50%",
            padding: "5px 10px",
            color: "white",
            fontSize: "12px",
          }}
        >
          {totalItems}
        </span>
      )}
    </Link>
  );
};

export default CartWidget;
