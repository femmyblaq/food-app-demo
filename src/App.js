import Header from "./component/Layouts/Header";
import "./App.css";
import Cart from "./component/Carts/Cart";
import Meal from "./component/Meals/Meals";
import { useState } from "react";
function App() {
  const [cartIsShow, setCartIsShow] = useState(false);

  const showCart = () => {
    setCartIsShow(true);
  };
  const hideCart = () => {
    setCartIsShow(false);
  };
  return (
    <div className="App">
      <Header onShowCart={showCart}></Header>
      <main>
        <Meal />
      </main>
      {cartIsShow && <Cart onClose={hideCart}></Cart>}
    </div>
  );
}

export default App;
