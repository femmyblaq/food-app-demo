import { Fragment } from "react";
import MealAvailable from "./MealAvailable";
import MealSummary from "./MealSummary";

const Meals = (props) => {
  return (
    <Fragment>
      <MealSummary />
      <MealAvailable />
    </Fragment>
  );
};
export default Meals;
