import React, { useEffect, useReducer, useState } from "react";

export default function Lesson() {
   // const [count, setCount] = useState(0)
   const [counter, dispatch] = useReducer(
      (state, action) => {
         return {
            plus: { ...state, count: state.count + action.payload },
            minus: { ...state, count: state.count - action.payload },
         }[action.type];
      },
      { count: 0, type: "plus", payload: 1 }
   );

   return (
      <div>
         <select
            onChange={({ target }) =>
               dispatch({ ...counter, payload: Number(target.value) })
            }
         >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
         </select>
         <button onClick={() => dispatch({ ...counter, type: "minus" })}>
            minus
         </button>
         {counter.count}
         <button onClick={() => dispatch({ ...counter, type: "plus" })}>
            plus
         </button>
      </div>
   );
}
