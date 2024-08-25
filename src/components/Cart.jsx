// import React, { useContext } from "react";
// import Container from "react-bootstrap/Container";
// import { CartContext } from "../context/CartContext";
// import { useNavigate } from "react-router-dom";
// import Volver from "./Volver";

// const Cart = () => {
//   const { items, removeItems, reset } = useContext(CartContext);
//   const navigate = useNavigate();

//   const total = items.reduce((acc, act) => acc + act.price * act.quantity, 0);

//   if (!items.length) {
//     return (
//       <>
//         <h4>No estás comprando nada</h4>
//         {/* <button onClick={() => navigate("/")}>Volver al inicio</button> */}
//         <Volver />
//       </>
//     );
//   }

//   return (
//     <Container>
//       {/* <button onClick={() => navigate("/")}>Volver</button> */}
//       <Volver />
//       <button style={{ margin: "8px" }} onClick={reset}>
//         Limpiar Carrito
//       </button>
//       {items.map((item) => (
//         <div key={item.id}>
//           <h3>{item.title}</h3>
//           <h4>{item.price}</h4>
//           <h5>Estas comprando: {item.quantity}</h5>
//           <div className="d-flex flex-column align-center">
//             <img
//               src={item.imageId}
//               style={{
//                 height: "300px",
//                 width: "200px",
//                 borderRadius: "8px",
//                 marginBottom: "8px",
//               }}
//               alt={item.title}
//             />
//             <button className="mb-2" onClick={() => removeItems(item.id)}>
//               X
//             </button>
//           </div>
//         </div>
//       ))}
//       <h4>Total: {total}</h4>
//       <button onClick={() => navigate("/checkout")}>Proceder al Pago</button>
//     </Container>
//   );
// };

// export default Cart;
import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import Volver from "./Volver";

const Cart = () => {
  const { items, removeItems, reset } = useContext(CartContext);
  const navigate = useNavigate();

  const total = items.reduce((acc, act) => acc + act.price * act.quantity, 0);

  if (!items.length) {
    return (
      <>
        <h4>No estás comprando nada</h4>
        <Volver />
      </>
    );
  }

  return (
    <Container>
      <Volver />
      <button style={{ margin: "8px" }} onClick={reset}>
        Limpiar Carrito
      </button>
      <div className="d-flex flex-wrap">
        {items.map((item) => (
          <div key={item.id} style={{ margin: "8px" }}>
            <h3>{item.title}</h3>
            <h4>{item.price}</h4>
            <h5>Estás comprando: {item.quantity}</h5>
            <div className="d-flex flex-column align-items-center">
              <img
                src={item.imageId}
                style={{
                  height: "300px",
                  width: "200px",
                  borderRadius: "8px",
                  marginBottom: "8px",
                }}
                alt={item.title}
              />
              <button className="mb-2" onClick={() => removeItems(item.id)}>
                X
              </button>
            </div>
          </div>
        ))}
      </div>
      <h4>Total: {total}</h4>
      <button onClick={() => navigate("/checkout")}>Proceder al Pago</button>
    </Container>
  );
};

export default Cart;
