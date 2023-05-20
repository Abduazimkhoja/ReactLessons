import React, { useReducer } from "react";

export default function Lesson() {
   // const [counter, dispatch] = useReducer(()=>{}, 0) // dispatch запускает callback function

   // const [counter, dispatch] = useReducer(() => "callback", 0);
   // return callback присваивается в counter

   const reducer = (state, action) =>
      ({
         plus: state + (action.payload || 1),
         minus: state - (action.payload || 1),
         state,
      }[action.type || "state"]);

   const [counter, dispatch] = useReducer(reducer, 0);
   // у callback есть 2 параметра. первый это само значение, второе это параметр указаный в despatch

   // return callback присваивается в counter
   return (
      <div>
         <h1>{counter}</h1>
         <button onClick={() => dispatch({ type: "minus" })}>minus</button>
         <button onClick={() => dispatch({ type: "plus" })}>plus</button>
         <button onClick={() => dispatch({ type: "plus", payload: 20 })}>
            pyload 20
         </button>
      </div>
   );
}
