import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getFirestore, getDoc, doc } from "firebase/firestore";
import React from "react";
import { CartContext } from "../context/CartContext";
import ItemDetail from "./ItemDetail";

const ItemDetailListContainer = () => {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();
  const { addItem } = useContext(CartContext);

  const onAdd = (count) => {
    addItem({ ...item, quantity: count });
    navigate("/cart");
  };

  useEffect(() => {
    const db = getFirestore();
    const refDoc = doc(db, "items", id);

    getDoc(refDoc)
      .then((snapshot) => {
        if (snapshot.exists()) {
          setItem({ id: snapshot.id, ...snapshot.data() });
        } else {
          navigate("/error");
        }
      })
      .finally(() => setLoading(false));
  }, [id, navigate]);

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

  return <ItemDetail item={item} onAdd={onAdd} />;
};

export default ItemDetailListContainer;
