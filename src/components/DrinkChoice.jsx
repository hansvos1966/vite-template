export const DrinkChoice = ({ drink }) => {
  return (
    <>
      <h2>Your Drink</h2>
      <img
        src={drink.imgUrl}
        alt={drink.alt}
        style={{ width: "100px", height: "100px" }}
      />
      <p>{drink.name} will be ready in a few minutes.</p>
    </>
  );
};
