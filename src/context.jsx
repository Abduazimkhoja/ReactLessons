import React, { createContext, useState } from "react";

export const StudentContext = createContext();

const StudentList = ({ children }) => {
   const [students, setStudents] = useState([
      { id: 1, name: "John" },
      { id: 2, name: "Jane" },
      { id: 3, name: "David" },
      { id: 4, name: "Emily" },
      { id: 5, name: "Michael" },
   ]);
   return (
      <StudentContext.Provider value={[students, setStudents]}>
         {children}
      </StudentContext.Provider>
   );
};
export default StudentList;
