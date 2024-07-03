import classes from "./Input.module.css";

const Input = (props) => {
  return (
    <div>
      <div className={classes.input}>
        <label htmlFor={props.input.id}>{props.label}</label>

        <input {...props.input} />
      </div>
    </div>
  );
};

export default Input;
