import React, { useContext, useEffect, useReducer, useState } from "react";
import { Header } from "./style";
import { StudentContext } from "../context";

export default function Lesson2(props) {
   const [students] = useContext(StudentContext);

   return (
      <div>
         <Header>
            <ul>
               <li>users <b>{students.length}</b></li>
               <li>home</li>
               <li>about</li>
            </ul>
         </Header>
      </div>
   );
}
