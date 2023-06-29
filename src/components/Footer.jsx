/* eslint-disable react/no-unescaped-entities */

import Order from "./Order";

const Footer = () => {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;

  const isOpen = hour >= openHour && hour <= closeHour;

  // if (hour >= openHour && hour <= closeHour) alert("We're currently open! 😄");
  // else alert("Sorry we're closed 🙇‍♂️");

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} />
      ) : (
        <p>
          We're happy to welcome you between {openHour}:00 and {closeHour}:00
        </p>
      )}
    </footer>
  );
};

export default Footer;
