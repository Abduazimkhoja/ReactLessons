import React, { useState } from "react";

export const Lesson = () => {
   const [data, setData] = useState({ name: "John", count: 0 }); // DE structuring useState

   return (
      <div>
         <div>{data.name}</div>
         <input
            value={data.name}
            type="text"
            onChange={(event) => setData({ ...data, name: event.target.value })}
         />
         <div>{data.count}</div>
         <button onClick={() => setData({ ...data, count: data.count + 1 })}>
            {" "}
            click
         </button>
      </div>
   );
};
