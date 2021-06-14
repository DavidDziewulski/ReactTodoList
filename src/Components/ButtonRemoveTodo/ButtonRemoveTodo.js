import styles from "./ButtonRemoveTodo.module.scss";
const ButtonRemoveTodo = ({ handleRemoveTodo, id }) => (
  <button
    aria-label="remove  todo"
    onClick={() => handleRemoveTodo(id)}
    className={styles.btn}
    type="reset"
  />
);
export default ButtonRemoveTodo;
