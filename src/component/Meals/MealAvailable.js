import classes from "../Meals/MealAvailable.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEAL = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finnest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Pounded yam",
    description: "Soft and delicious.",
    price: 20.3,
  },
  {
    id: "m3",
    name: "Jellof rice",
    description: "Sweet aroma with saurce",
    price: 10.3,
  },
  {
    id: "m4",
    name: "Jazzy Burger",
    description: "American raw, meaty.",
    price: 12.88,
  },
];

const MealAvailable = (props) => {
  const mealList = DUMMY_MEAL.map((meal) => (
    <MealItem
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealList}</ul>
      </Card>
    </section>
  );
};
export default MealAvailable;
