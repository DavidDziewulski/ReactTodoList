import styles from "./App.module.scss";
import AppHeader from "../AppHeader/AppHeader";
import TodoList from "../TodoList/TodoList";
function App() {
  return (
    <div className={styles.App}>
      <AppHeader />
      <TodoList />
    </div>
  );
}

export default App;
