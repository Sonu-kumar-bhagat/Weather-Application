import React from "react";
import "./style.css";

const UseState = () => {
  // const initialData = 15;
  const [myNum, setMyNum] = React.useState(0);
  //useState ek array return karta hai jisake andar do element hota hai
  //"setMyNum" ke madad se "myNum" ka value or data update hota hai.

  return (
    <>
      <div className="center_div">
        {/* ye yaha ka data isake "setMyNum" madad se  update kar rahe hai data jo number hai */}
        <p>{myNum}</p>
        <div class="button2" onClick={() => setMyNum(myNum + 1)}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          INCR
        </div>
        <div
          class="button2"
          onClick={() => (myNum > 0 ? setMyNum(myNum - 1) : setMyNum(0))}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          DECR
        </div>
      </div>
    </>
  );
};

export default UseState;