import { Fragment } from "react";
import classes from "./Header.module.css";
import HeaderButton from "./HeaderButton";
import mealImg from "../../assets/groupFoods.jpg";

const Header = (props) => {
  return (
    <Fragment>
      <div className={classes.header}>
        <h1>
          Food<span>App</span>
        </h1>
        <HeaderButton onClick={props.onShowCart} />
      </div>
      <div className={classes["main-image"]}>
        <img
          src={mealImg}
          className={classes.img}
          alt="there was suppose to be an"
        />
      </div>
    </Fragment>
  );
};

export default Header;
