import { useState } from "react";
// function Counter(props){
function Counter({ title = "Hello" }) {
  const [count, setCount] = useState(0);

  function minus() {
    setCount(count - 1);
  }
  return (
    <>
      <h2>{title}</h2>
      <button onClick={() => setCount(count + 1)}>+</button>
      <span>{count}</span>
      {/* If count equals 0 the minus function will not trigger
            condition ? true : false 
            condition && true
            count > 0 && minus
            */}
      {/* <button style={count === 0 ?{cursor: "not-allowed"}:{cursor: "pointer"}} */}
      <button
        className={count === 0 ? "button__disabled" : "button__active"}
        disabled={count === 0}
        onClick={count > 0 ? minus : null}
      >
        -
      </button>
    </>
  );
}
export default Counter;
