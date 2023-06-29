/* eslint-disable react/prop-types */

const Pizza = ({ name, photoName, ingredients, price, soldOut }) => {
  return (
    <li className={`pizza ${soldOut && "sold-out"}`}>
      <img src={photoName} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <span>{soldOut ? "Sold out" : price}</span>
      </div>
    </li>
  );
};

export default Pizza;
