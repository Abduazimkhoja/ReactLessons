import React, { useContext } from "react";
import { StudentContext } from "../context";

export default function Lesson() {
   const [students, setStudents] = useContext(StudentContext);
   const onDelete = (id) => {
      setStudents(students.filter((v) => v.id !== id));
   };
   return (
      <div>
         {students.map((v) => (
            <p>
               {v.id} {v.name}
               <button onClick={() => onDelete(v.id)}>Delete</button>
            </p>
         ))}
      </div>
   );
}
