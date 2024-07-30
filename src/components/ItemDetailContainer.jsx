// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import React from "react";
// import data from "../data/products.json";
// import Button from "react-bootstrap/Button";

// const ItemDatailListContainer = () => {
//   const [item, setItems] = useState(null);
//   const [loading, setLoading] = useState(true);

//   const { id } = useParams(); // 'id' se espera que sea la categoría

//   useEffect(() => {
//     new Promise((resolve) => {
//       setTimeout(() => resolve(data), 2000);
//     }).then((response) => {
//       // if (!id) {
//       //   setItems(response);
//       // } else {
//       const finded = response.find(
//         (item) => item.id) === Number(id)
//       );
//       setItem(finded);
//     });
//     .finally(() => setLoading(false));
//   }, [id]);

//   if (loading) {
//     return (
//       <div>
//         <h4>Espere...</h4>
//       </div>
//     );
//   }

//   return (
//     <div>
//       <h1>Producto</h1>
//       <h2>{item.name}</h2>
//       <img src={item.img} heigth={200}/>
//       <h4>{item.category}</h4>
//       <p>{item.detail}</p>
//     </div>
//   );
// };

// export default ItemDatailListContainer;
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import React from "react";
import data from "../data/products.json";
import Button from "react-bootstrap/Button";

const ItemDetailListContainer = () => {
  const [item, setItem] = useState(null); // Corregido: useState(null)
  const [loading, setLoading] = useState(true);
  const { id } = useParams(); // 'id' se espera que sea el identificador del producto

  useEffect(() => {
    new Promise((resolve) => {
      setTimeout(() => resolve(data), 2000);
    })
      .then((response) => {
        const finded = response.find((item) => item.id === Number(id));
        setItem(finded);
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

  if (!item) {
    return (
      <div>
        <h4>Producto no encontrado</h4>
      </div>
    );
  }

  return (
    <div>
      <h1>Producto</h1>
      <h2>{item.model}</h2>
      <img src={item.img} alt={item.model} height={200} />
      <h4>{item.category}</h4>
      <p>{item.detail}</p>
      <Button variant="primary">Comprar</Button>
    </div>
  );
};

export default ItemDetailListContainer;
