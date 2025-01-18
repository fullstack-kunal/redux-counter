import { useDispatch, useSelector } from "react-redux";
import classes from "./Counter.module.css";
import { counterActions } from "../../src/store/index";

const Counter = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.counter);
  const show = useSelector((state) => state.showCounter);

  console.log(selector.showCounter);

  const inreaseFunction = () => {
    dispatch(counterActions.increment());
  };
  const decreaseFunction = () => {
    dispatch(counterActions.decrement());
  };
  const customFunction = () => {
    dispatch(counterActions.customVal(10));
  };
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{selector}</div>}
      <div>
        <button onClick={inreaseFunction}>Increment</button>
        <button onClick={customFunction}>Increment by 10</button>
        <button onClick={decreaseFunction}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
