import React, { useEffect, useReducer, useState } from "react";

export default function Lesson() {
   const [counter, dispatch] = useReducer(
      (state, action) =>
         ({
            plus: { ...state, count: state.count + state.payload },
            minus: { ...state, count: state.count - state.payload },
            payload: { ...state, payload: action },
         }[action.type || "payload"]),
      {
         count: 0,
         payload: 1,
      }
   );

   return (
      <div>
         <select onChange={({ target }) => dispatch(Number(target.value))}>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
         </select>
         {counter.count}
         <button onClick={() => dispatch({ type: "plus" })}>plus</button>
         <button onClick={() => dispatch({ type: "minus" })}>minus</button>
      </div>
   );
}
