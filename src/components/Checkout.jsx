// import React, { useContext, useState } from "react";
// import Container from "react-bootstrap/Container";
// import { CartContext } from "../context/CartContext";
// import {
//   addDoc,
//   collection,
//   getFirestore,
//   doc,
//   updateDoc,
// } from "firebase/firestore";
// import { useNavigate } from "react-router-dom";

// const initialValues = {
//   phone: "",
//   email: "",
//   confirmEmail: "",
//   name: "",
// };

// const Checkout = () => {
//   const [buyer, setBuyer] = useState(initialValues);
//   const { items, reset } = useContext(CartContext);
//   const navigate = useNavigate();

//   const total = items.reduce((acc, act) => acc + act.price * act.quantity, 0);

//   const handleChange = (ev) => {
//     setBuyer((prev) => ({
//       ...prev,
//       [ev.target.name]: ev.target.value,
//     }));
//   };

//   const handleOrder = async () => {
//     if (buyer.email !== buyer.confirmEmail) {
//       alert("Los correos electrónicos no coinciden. Por favor, verifíquelos.");
//       return;
//     }

//     const order = {
//       buyer,
//       items,
//       total,
//       date: new Date().toISOString(),
//       status: "generada",
//     };

//     const db = getFirestore();
//     const orderCollection = collection(db, "orders");

//     try {
//       const { id } = await addDoc(orderCollection, order);

//       for (const item of items) {
//         const itemRef = doc(db, "items", item.id);
//         await updateDoc(itemRef, {
//           stock: item.stock - item.quantity,
//         });
//       }

//       alert("Su orden: " + id + " ha sido completada!");
//       reset();
//       setBuyer(initialValues);
//       navigate("/");
//     } catch (error) {
//       console.error("Error al crear la orden: ", error);
//     }
//   };

//   const handleCancel = () => {
//     reset();
//     navigate("/");
//   };

//   return (
//     <Container>
//       <h2>Checkout</h2>
//       <form>
//         <div>
//           <label>Nombre</label>
//           <input value={buyer.name} onChange={handleChange} name="name" />
//         </div>

//         <div>
//           <label>Email</label>
//           <input value={buyer.email} onChange={handleChange} name="email" />
//         </div>

//         <div>
//           <label>Confirmar Email</label>
//           <input
//             value={buyer.confirmEmail}
//             onChange={handleChange}
//             name="confirmEmail"
//           />
//         </div>

//         <div>
//           <label>Teléfono</label>
//           <input value={buyer.phone} onChange={handleChange} name="phone" />
//         </div>

//         <button type="button" onClick={handleOrder}>
//           Realizar Compra
//         </button>
//         <button type="button" onClick={handleCancel}>
//           Cancelar
//         </button>
//       </form>
//     </Container>
//   );
// };

// export default Checkout;
// import React, { useContext, useState } from "react";
// import Container from "react-bootstrap/Container";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
// import { CartContext } from "../context/CartContext";
// import {
//   addDoc,
//   collection,
//   getFirestore,
//   doc,
//   updateDoc,
// } from "firebase/firestore";
// import { useNavigate } from "react-router-dom";
// import Swal from "sweetalert2";

// const initialValues = {
//   phone: "",
//   email: "",
//   confirmEmail: "",
//   name: "",
// };

// const Checkout = () => {
//   const [buyer, setBuyer] = useState(initialValues);
//   const { items, reset } = useContext(CartContext);
//   const navigate = useNavigate();

//   const total = items.reduce((acc, act) => acc + act.price * act.quantity, 0);

//   const handleChange = (ev) => {
//     setBuyer((prev) => ({
//       ...prev,
//       [ev.target.name]: ev.target.value,
//     }));
//   };

//   const handleOrder = async () => {
//     if (buyer.email !== buyer.confirmEmail) {
//       // alert("Los correos electrónicos no coinciden. Por favor, verifíquelos.");
//       Swal.fire(
//         "Los correos electrónicos no coinciden. Por favor, verifíquelos."
//       );
//       return;
//     }

//     const order = {
//       buyer,
//       items,
//       total,
//       date: new Date().toISOString(),
//       status: "generada",
//     };

//     const db = getFirestore();
//     const orderCollection = collection(db, "orders");

//     try {
//       const { id } = await addDoc(orderCollection, order);

//       for (const item of items) {
//         const itemRef = doc(db, "items", item.id);
//         await updateDoc(itemRef, {
//           stock: item.stock - item.quantity,
//         });
//       }

//       // alert("Su orden: " + id + " ha sido completada!");
//       Swal.fire("Su orden: " + id + " ha sido completada!");
//       reset();
//       setBuyer(initialValues);
//       navigate("/");
//     } catch (error) {
//       console.error("Error al crear la orden: ", error);
//     }
//   };

//   const handleCancel = () => {
//     reset();
//     navigate("/");
//   };

//   return (
//     <Container className="my-5">
//       <h1 className="mb-4">Checkout</h1>
//       <Form>
//         <Form.Group className="mb-3 fs-4">
//           <Form.Label>Nombre</Form.Label>
//           <Form.Control
//             type="text"
//             value={buyer.name}
//             onChange={handleChange}
//             name="name"
//             placeholder="Ingrese su nombre"
//           />
//         </Form.Group>

//         <Form.Group className="mb-3  fs-4">
//           <Form.Label>Email</Form.Label>
//           <Form.Control
//             type="email"
//             value={buyer.email}
//             onChange={handleChange}
//             name="email"
//             placeholder="Ingrese su email"
//           />
//         </Form.Group>

//         <Form.Group className="mb-3 fs-4">
//           <Form.Label>Confirmar Email</Form.Label>
//           <Form.Control
//             type="email"
//             value={buyer.confirmEmail}
//             onChange={handleChange}
//             name="confirmEmail"
//             placeholder="Confirme su email"
//           />
//         </Form.Group>

//         <Form.Group className="mb-3 fs-4">
//           <Form.Label>Teléfono</Form.Label>
//           <Form.Control
//             type="tel"
//             value={buyer.phone}
//             onChange={handleChange}
//             name="phone"
//             placeholder="Ingrese su número de teléfono"
//           />
//         </Form.Group>

//         <Button
//           style={{ background: "mediumturquoise", border: "none" }}
//           onClick={handleOrder}
//           className="me-2"
//         >
//           Realizar Compra
//         </Button>
//         <Button
//           style={{ background: "black", border: "none" }}
//           onClick={handleCancel}
//         >
//           Cancelar
//         </Button>
//       </Form>
//     </Container>
//   );
// };

// export default Checkout;
import React, { useContext, useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { CartContext } from "../context/CartContext";
import {
  addDoc,
  collection,
  getFirestore,
  doc,
  updateDoc,
} from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const initialValues = {
  phone: "",
  email: "",
  confirmEmail: "",
  name: "",
};

const Checkout = () => {
  const [buyer, setBuyer] = useState(initialValues);
  const { items, reset } = useContext(CartContext);
  const navigate = useNavigate();

  const total = items.reduce((acc, act) => acc + act.price * act.quantity, 0);

  const handleChange = (ev) => {
    setBuyer((prev) => ({
      ...prev,
      [ev.target.name]: ev.target.value,
    }));
  };

  const handleOrder = async () => {
    if (buyer.email !== buyer.confirmEmail) {
      Swal.fire({
        icon: "error",
        title: "¡Error!",
        text: "Los correos electrónicos no coinciden. Por favor, verifíquelos.",
      });
      return;
    }

    const order = {
      buyer,
      items,
      total,
      date: new Date().toISOString(),
      status: "generada",
    };

    const db = getFirestore();
    const orderCollection = collection(db, "orders");

    try {
      const { id } = await addDoc(orderCollection, order);

      for (const item of items) {
        const itemRef = doc(db, "items", item.id);
        await updateDoc(itemRef, {
          stock: item.stock - item.quantity,
        });
      }

      Swal.fire({
        icon: "success",
        title: "¡Éxito!",
        text: `Su orden: ${id} ha sido completada!`,
      });
      reset();
      setBuyer(initialValues);
      navigate("/");
    } catch (error) {
      console.error("Error al crear la orden: ", error);
      Swal.fire({
        icon: "error",
        title: "¡Error!",
        text: "Hubo un problema al procesar su orden. Por favor, intente nuevamente.",
      });
    }
  };

  const handleCancel = () => {
    reset();
    navigate("/");
  };

  return (
    <Container className="my-5">
      <h1 className="mb-4">Checkout</h1>
      <Form>
        <Form.Group className="mb-3 fs-4">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            value={buyer.name}
            onChange={handleChange}
            name="name"
            placeholder="Ingrese su nombre"
          />
        </Form.Group>

        <Form.Group className="mb-3 fs-4">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            value={buyer.email}
            onChange={handleChange}
            name="email"
            placeholder="Ingrese su email"
          />
        </Form.Group>

        <Form.Group className="mb-3 fs-4">
          <Form.Label>Confirmar Email</Form.Label>
          <Form.Control
            type="email"
            value={buyer.confirmEmail}
            onChange={handleChange}
            name="confirmEmail"
            placeholder="Confirme su email"
          />
        </Form.Group>

        <Form.Group className="mb-3 fs-4">
          <Form.Label>Teléfono</Form.Label>
          <Form.Control
            type="tel"
            value={buyer.phone}
            onChange={handleChange}
            name="phone"
            placeholder="Ingrese su número de teléfono"
          />
        </Form.Group>

        <Button variant="success" onClick={handleOrder} className="me-2">
          Realizar Compra
        </Button>
        <Button variant="secondary" onClick={handleCancel}>
          Cancelar
        </Button>
      </Form>
    </Container>
  );
};

export default Checkout;
