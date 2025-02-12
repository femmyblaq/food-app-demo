import Input from "../../UI/Input";
import classes from "../MealItem/MealItemForm.module.css";

const MealItemForm = (props) => {
  return (
    <form className={classes.form}>
      {/* <input type="number" /> */}
      <Input
        label="Amount"
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
    </form>
  );
};

export default MealItemForm;
