import { useDispatch, useSelector } from "react-redux";
import Card from "../UI/Card";
import classes from "./ProductItem.module.css";
import { itemActions } from "../store/item";

const ProductItem = (props) => {
  const dispatch = useDispatch();
  // const item = useSelector((state) => state.item);

  const { title, price, description } = props;

  const addToCartHandler = () => {
    dispatch(itemActions.increment());
  };

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addToCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
