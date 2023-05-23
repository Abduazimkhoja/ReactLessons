import React, { useContext, useEffect, useReducer, useState } from "react";
import { StudentContext } from "../context";

export default function Lesson() {
   const [students, setStudents] = useContext(StudentContext);
   const onDelete = (id) => {
      setStudents(students.filter((v) => v.id !== id));
   };
   return (
      <div>
         {students.map(({ id, name }) => {
            return (
               <div>
                  <h1>
                     {id} - {name}
                  </h1>
                  <button onClick={() => onDelete(id)}>delete</button>
               </div>
            );
         })}
      </div>
   );
}
