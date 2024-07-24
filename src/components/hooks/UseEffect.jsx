import React, { useState, useEffect } from "react";
import "./style.css";

const UseEffect = () => {
//   const initialData = 15;
  const [myNum, setMyNum] = useState(0);
  //ye lagbhag simillar hai usestate se thoda sa (useEffect) ye bhi use karna padata hai .

  useEffect(() => {
      // yaha par empty array ya koi value bhi  ("[]" or "[54]") agar ham laga dete hai to ek bar hi run hoga  jab page pahali bar realod hua tha
     // This function will run after every render
     //ye function har bar call hota rahega
     console.log("hii");
    document.title = `Chats(${myNum})`;
  },[]); // Only re-run the effect if myNum changes or this is not there ("[]")
//   document.title = `Chats(${myNum})`; // ye yaha bhi rahega to bhi chalega

  return (
    <>
    
      <div className="center_div">
        {/* ye to change hote rahega */}        
        <p>{myNum}</p>

        {/* ye lag bhag simillar hai use state se */}
        <div class="button2" onClick={() => setMyNum(myNum + 1)}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          INCR
        </div>
      </div>
    </>
  );
};

export default UseEffect;