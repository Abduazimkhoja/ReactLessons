import React, { useState } from "react";
import Lesson from "./lesson";
import Lesson2 from "./lesson copy";
import { StudentList } from "./context";

function App() {

   return (
      <div className="App">
         <StudentList>
            <Lesson2 />
            <Lesson />
         </StudentList>
      </div>
   );
}

export default App;
