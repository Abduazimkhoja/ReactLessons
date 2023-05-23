import { createContext, useState } from "react";

export const StudentContext = createContext();

export const StudentList = ({ children }) => {
   const [students, setStudents] = useState(
      [
         { id: 1, name: "John" },
         { id: 2, name: "Bob" },
         { id: 3, name: "Max" },
      ]
   )
   
   return <StudentContext.Provider value={[students, setStudents]}>{children}</StudentContext.Provider>;
};
