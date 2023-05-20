import React, { useEffect, useState } from "react";

export default function Lesson() {

   const [count, setCount] = useState(0)
   const [age, setAge] = useState(0)

   // case 1
   useEffect(() => { // отслеживает каждое изменение в dom 
      console.log("case-1");
   })

   // case 2
   useEffect(() => { // срабатывает 1 раз при запуске componenta 
      console.log("case-2");
   }, [])
   
   // case 3
   useEffect(() => { // срабатывает при изменении переменной count
      console.log("case-3");
   }, [count])

   // case 4
   useEffect(() => { // срабатывает при изменении переменной count и age
      console.log("case-4");
   }, [count, age])

   return <div>
      <h1>{count}</h1>
      <h1>{age}</h1>
      <button onClick={() => setCount(count + 1)}>Count</button>
      <button onClick={() => setAge(age + 1)}>Age</button>
   </div>;
}
