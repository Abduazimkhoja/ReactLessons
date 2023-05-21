import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import StudentList from "./context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
   <React.StrictMode>
      <StudentList>
         <App />
      </StudentList>
   </React.StrictMode>
);
