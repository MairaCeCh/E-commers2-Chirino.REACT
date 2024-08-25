import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const ItemList = ({ items }) => {
  return (
    <div>
      <h1 className="productos">Productos</h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "1rem",
          flexDirection: "row",
          alignItems: "stretch",
          justifyContent: "space-around",
        }}
      >
        {items.map((item) => (
          <Card
            key={item.id}
            style={{
              width: "18rem",
              border: "none",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              WebkitBoxShadow: "9px 9px 11px -6px rgba(0, 0, 0, 0.25)",
              MozBoxShadow: "9px 9px 11px -6px rgba(0, 0, 0, 0.25)",
              boxShadow: "9px 9px 11px -6px rgba(0, 0, 0, 0.25)",
            }}
          >
            <Card.Img
              variant="top"
              src={item.imageId}
              alt={item.title}
              style={{
                height: "200px",
                objectFit: "cover",
                borderRadius: "8px",
              }}
            />
            <Card.Body style={{ flexGrow: 1 }}>
              <Card.Title>
                <h3>{item.title}</h3>
              </Card.Title>
              <Card.Text>
                <h4>{item.categoryId}</h4>
              </Card.Text>
              <Card.Text>${item.price}</Card.Text>
            </Card.Body>
            <Card.Footer>
              <Link to={`/item/${item.id}`}>
                <Button
                  style={{
                    background: "mediumturquoise",
                    border: "none",
                  }}
                >
                  Ver más
                </Button>
              </Link>
            </Card.Footer>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ItemList;
