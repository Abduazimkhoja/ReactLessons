import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export default function One() {
   const [users, setUsers] = useState([]);
   const [select, setSelect] = useState([]);

   const getUsers = (id) => {
      return fetch(
         `https://jsonplaceholder.typicode.com/users/${id || ""}`
      ).then((response) => response.json());
   };

   useEffect(() => {
      getUsers().then((json) => {
         setUsers(json);
      });
   }, []);

   const getInfo = (id) => {
      getUsers(id).then((user) => {
         setSelect(user);
      });
   };

   return (
      <div style={{ display: "flex" }}>
         <div>
            {users.map(({ id, username, email }) => (
               <div key={id}>
                  <p>
                     <b>Username: </b>
                     {username}
                  </p>
                  <p>
                     <b>Email:</b> {email}
                  </p>
                  <button onClick={() => getInfo(id)}>Select</button>
                  <br />
               </div>
            ))}
         </div>
         {
            <div>
               <p>
                  <b>Username: </b>
                  {select.username}
               </p>
               <p>
                  <b>Email:</b> {select.email}
               </p>
            </div>
         }
      </div>
   );
}
