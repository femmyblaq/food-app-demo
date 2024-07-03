import classes from "../Layouts/HeaderButton.module.css";
// import Img from "../../../public/icons8-cart-32.png";
const HeaderButton = (props) => {
  return (
    <button className={classes.button} onClick={props.onClick}>
      <span>{/* <Img /> */}</span>
      <span>Your Cart</span>
      <span className={classes.badge}>3</span>
    </button>
  );
};

export default HeaderButton;
