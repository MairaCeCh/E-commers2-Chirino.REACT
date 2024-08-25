import React from "react";
import Button from "react-bootstrap/Button";
import { ItemsCount } from "./ItemsCount";

const ItemDetail = ({ item, onAdd }) => {
  return (
    <div>
      <h1>Producto</h1>
      <h2>{item.title}</h2>
      <h2>{item.model}</h2>
      <img src={item.imageId} alt={item.title} height={200} />
      <h3>{item.categoryId}</h3>
      <h4>{item.detail}</h4>
      <h4>Precio: {item.price}</h4>
      <h5>Stock: {item.stock}</h5>
      <ItemsCount stock={item.stock} onAdd={onAdd}></ItemsCount>
      <Button
        style={{
          background: "mediumturquoise",
          border: "none",
          marginTop: "20px",
          width: "80px",
          height: "40px",
        }}
        onClick={() => onAdd(1)}
      >
        Comprar
      </Button>
    </div>
  );
};

export default ItemDetail;
