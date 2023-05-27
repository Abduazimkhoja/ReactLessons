import React, { useEffect, useState } from "react";

export default function One() {
   const [count, setCount] = useState(Number(localStorage.getItem("count")));
   const plus = () => {
      localStorage.setItem("count", JSON.stringify({data: count + 1}));
      setCount(count + 1);
   };
   return (
      <div>
         <h1>Count: {count}</h1>
         <button onClick={plus}>Plus</button>
         <button onClick={() => localStorage.removeItem("count")}>delete</button>
         <button onClick={() => localStorage.clear()}>clear</button>
      </div>
   );
}
 