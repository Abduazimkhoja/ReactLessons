import React, { useContext } from "react";
import { StudentContext } from "../context";

export default function Lesson2() {
   const [students, setStudents] = useContext(StudentContext)
   return <div>
      component 2 <br />
      student length {students.length}
   </div>;
}
