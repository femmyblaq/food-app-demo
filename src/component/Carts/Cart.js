import classes from "../Carts/Cart.module.css";
import Modal from "../UI/Modal";
const Cart = (props) => {
  const CartItems = (
    <ul className={classes["cart-items"]}>
      {[{ id: "c2", name: "Sushi", amount: 2, price: 22.33 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <Modal onClose={props.onClose}>
      {CartItems}
      <div className={classes.total}>
        <span>Total amount</span>
        <span>35.62</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        <button className={classes.button}>Cancel</button>
      </div>
    </Modal>
  );
};
export default Cart;
