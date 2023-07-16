import { type FunctionComponent } from "preact";
import { useState } from "preact/hooks";
import styles from "./App.module.scss";

const Counter: FunctionComponent = () => {
  const [count, setCount] = useState(0);
  const increment = (): void => {
    setCount(count + 1);
  };

  return (
    <div className={styles.counter}>
      Current value: {count}
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default Counter;
