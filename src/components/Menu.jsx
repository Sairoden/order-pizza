/* eslint-disable react/no-unescaped-entities */

// Components
import Pizza from "./Pizza";

import { usePizzaContext } from "../context/PizzasContext";

const Menu = () => {
  const { pizzas } = usePizzaContext();
  // const pizzas = [];

  return (
    <main className="menu">
      <h2>Our menu</h2>
      {pizzas.length > 0 ? (
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>
          <ul className="pizzas">
            {pizzas.map(pizza => (
              <Pizza key={pizza.name} {...pizza} />
            ))}
          </ul>
        </>
      ) : (
        <p>We're still working on our menu. Please come back later 🛒</p>
      )}
    </main>
  );
};

export default Menu;
