import "./App.css";
import { useState } from "react";
import { DrinkButtons } from "./components/DrinkButtons";
import { DrinkChoice } from "./components/DrinkChoice";
import { DrinkSearch } from "./components/DrinkSearch";
import { tea, coffee } from "./utils/data";

export const App = () => {
  const [userDrink, setUserDrink] = useState();

  const handleDrinkSelection = (drink) => {
    setUserDrink(drink);
  };

  const greeting = "Welcome to our drink selection app!";

  return (
    <div className="App">
      {userDrink ? (
        <DrinkChoice drink={userDrink} />
      ) : (
        <>
          <h1>{greeting}</h1>
          <DrinkButtons
            drinkOne={tea}
            drinkTwo={coffee}
            onDrinkSelect={handleDrinkSelection}
          />
          {/* Toon de DrinkSearch-component */}
          <DrinkSearch />
        </>
      )}
    </div>
  );
};
