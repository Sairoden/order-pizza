/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { useContext, createContext, useState } from "react";

const Pizza = createContext();

import pizzaData from "../data";

export const PizzaProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState(pizzaData);

  const value = { pizzas, setPizzas };

  return <Pizza.Provider value={value}>{children}</Pizza.Provider>;
};

export const usePizzaContext = () => useContext(Pizza);
