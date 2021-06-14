import styles from "./AppHeader.module.scss";
const AppHeader = () => (
  <header className={styles.header}>
    <h1 className={styles.header__title}>ToDoList</h1>
  </header>
);

export default AppHeader;
