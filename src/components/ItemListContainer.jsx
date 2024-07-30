// import { useEffect, useState } from "react";
// import { Link, useParams } from "react-router-dom";
// import React from "react";
// import data from "../data/products.json";
// import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";

// const ItemListContainer = () => {
//   const [items, setItems] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const { id } = useParams();

//   useEffect(() => {
//     new Promise((resolve, reject) => {
//       setTimeout(() => resolve(data), 2000);
//     })
//       .then((response) => {
//         if (!id) {
//           setItems(response);
//         } else {
//           const filtered = response.filter((i) => i.category === id);
//         }
//         setItems(filtered);
//       })
//       .finally(() => setLoading(false));
//   }, [id]);

//   if (loading) {
//     return (
//       <div>
//         <h4>Espere...</h4>
//       </div>
//     );
//   }

//   if (items.length === 0) {
//     return (
//       <div>
//         <h4>NO HAY PRODUCTOS</h4>
//       </div>
//     );
//   }

//   return (
//     <div>
//       <h1>Productos</h1>
//       <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
//         {items.map((item) => (
//           <Card key={item.id} style={{ width: "18rem" }}>
//             <Card.Img variant="top" src={item.img} alt={item.model} />
//             <Card.Body>
//               <Card.Title>{item.model}</Card.Title>
//               <Card.Text>{item.detail}</Card.Text>
//               <Card.Text>{item.category}</Card.Text>
//               <Link to={`/item/${item.id}`}>
//                 <Button variant="primary">Ver más</Button>
//               </Link>
//             </Card.Body>
//           </Card>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ItemListContainer;
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import React from "react";
import data from "../data/products.json";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const { id } = useParams(); // 'id' se espera que sea la categoría

  useEffect(() => {
    new Promise((resolve) => {
      setTimeout(() => resolve(data), 2000);
    })
      .then((response) => {
        if (!id) {
          setItems(response);
        } else {
          const filtered = response.filter(
            (item) => item.category.toLowerCase() === id.toLowerCase()
          );
          setItems(filtered);
        }
      })
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <div>
        <h4>Espere...</h4>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div>
        <h4>NO HAY PRODUCTOS</h4>
      </div>
    );
  }

  return (
    <div>
      <h1>Productos</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
        {items.map((item) => (
          <Card key={item.id} style={{ width: "18rem" }}>
            <Card.Img variant="top" src={item.img} alt={item.model} />
            <Card.Body>
              <Card.Title>{item.model}</Card.Title>
              <Card.Text>{item.detail}</Card.Text>
              <Card.Text>{item.category}</Card.Text>
              <Link to={`/item/${item.id}`}>
                <Button variant="primary">Ver más</Button>
              </Link>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;
