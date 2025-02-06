import "./DrinkButtons.css";

export const DrinkButtons = ({ drinkOne, drinkTwo, onDrinkSelect }) => {
  return (
    <>
      <h2>Would you like tea or coffee?</h2>
      <div className="button-group">
        <button
          className="button"
          onClick={() => onDrinkSelect(drinkOne)} // Geef tea door
        >
          {drinkOne.name}
        </button>
        <button
          className="button"
          onClick={() => onDrinkSelect(drinkTwo)} // Geef coffee door
        >
          {drinkTwo.name}
        </button>
      </div>
    </>
  );
};
