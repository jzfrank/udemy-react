import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const item = useSelector((state) => state.item);

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        <CartItem item={item} />
      </ul>
    </Card>
  );
};

export default Cart;
