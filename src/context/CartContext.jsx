import { createContext, useState } from "react";

export const CartContext = createContext();

export const Provider = ({ children }) => {
  const [items, setItems] = useState([]);

  const reset = () => setItems([]);

  const addItem = (item) => {
    const alreadyExists = items.some((i) => i.id === item.id);

    if (alreadyExists) {
      const transform = items.map((i) => {
        if (i.id === item.id) {
          return { ...i, quantity: i.quantity + item.quantity };
        } else {
          return i;
        }
      });
      setItems(transform);
    } else {
      setItems((prev) => [...prev, { ...item, quantity: item.quantity }]);
    }
  };

  const removeItems = (id) => {
    const remove = items.filter((i) => i.id !== id);
    setItems(remove);
  };

  return (
    <CartContext.Provider value={{ addItem, items, reset, removeItems }}>
      {children}
    </CartContext.Provider>
  );
};
