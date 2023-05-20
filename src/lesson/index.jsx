import React, { useReducer, useState } from "react";

export default function Lesson() {
   const [counter, dispatch] = useReducer((state, action) => action, {
      selected: 1,
      count: 0,
   });

   let { count, selected } = counter;
   
   return (
      <div>
         <h1>{counter.count}</h1>

         <select
            onChange={({ target: { value } }) =>
               dispatch({ ...counter, selected: +value })
            }
         >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
         </select>

         <button
            onClick={() => dispatch({ ...counter, count: count + selected })}
         >
            Add {selected}
         </button>
      </div>
   );
}
