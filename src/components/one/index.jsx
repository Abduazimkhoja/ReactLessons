import React, { useEffect, useState } from "react";

export default function One() {
   const [count, setCount] = useState(Number(localStorage.getItem("count")));
   const plus = () => {
      localStorage.setItem("count", count + 1);
      setCount(count + 1);
   };
   console.log(localStorage.getItem("count"));
   return (
      <div>
         <h1>Count: {count}</h1>
         <button onClick={plus}>Plus</button>
         <button onClick={() => localStorage.removeItem("count")}>delete</button>
         <button onClick={() => localStorage.clear()}>clear</button>
      </div>
   );
}
