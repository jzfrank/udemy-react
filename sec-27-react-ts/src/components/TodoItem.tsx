import classes from "./TodoItem.module.css";

const TodoItem: React.FC<{
  text: string;
  onRemoveItem: () => void;
}> = (props) => {
  return (
    <li onClick={props.onRemoveItem} className={classes.item}>
      {props.text}
    </li>
  );
};

export default TodoItem;
