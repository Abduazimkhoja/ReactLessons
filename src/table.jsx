import React from "react";
import "./table.scss";

class Student extends React.Component {
   constructor(props) {
      super(props);
      this.state = [
         {
            id: 1,
            name: "none",
            age: 0,
            address: "none",
            status: "student",
            nickname: "none",
            univ: "none",
            job: "none",
         },
         {
            id: 2,
            name: "none",
            age: 0,
            address: "none",
            status: "student",
            nickname: "none",
            univ: "none",
            job: "none",
         },
         {
            id: 3,
            name: "none",
            age: 0,
            address: "none",
            status: "student",
            nickname: "none",
            univ: "none",
            job: "none",
         },
      ];
   }

   render() {
      let count = 0
      const edit = (event) => {
         if (count === 0) {
            let classInput = document.querySelectorAll(".table__input")
            classInput[0].setAttribute("readonly")
         }
      };
      const inputValue = (lastEvent) => {
         let defaultInput = lastEvent.target.defaultValue;
         console.log(this.state[0][defaultInput]); // добавляю атрибкт который делает input не доступным
      };
      return (
         <>
            <table className="table">
               <thead className="table__head">
                  <th className="table__title">ID</th>
                  <th className="table__title">NAME</th>
                  <th className="table__title">AGE</th>
                  <th className="table__title">ADDRESS</th>
                  <th className="table__title">STATUS</th>
                  <th className="table__title">NICKNAME</th>
                  <th className="table__title">UNIV</th>
                  <th className="table__title">JOB</th>
                  <th className="table__title">EDIT</th>
               </thead>
               <tbody className="table__body">
                  <tr>
                     <td className="table__value">{this.state[0].id}</td>
                     <td className="table__value">
                        <input
                           onChange={inputValue}
                           className="table__input table__input-active"
                           type="text"
                           defaultValue={this.state[0].name}
                        />
                     </td>
                     <td className="table__value">
                        <input
                           onChange={inputValue}
                           className="table__input table__input-active"
                           type="text"
                           defaultValue={this.state[0].age}
                        />
                     </td>
                     <td className="table__value">
                        <input
                           onChange={inputValue}
                           className="table__input table__input-active"
                           type="text"
                           defaultValue={this.state[0].address}
                        />
                     </td>
                     <td className="table__value">
                        <input
                           onChange={inputValue}
                           className="table__input table__input-active"
                           type="text"
                           defaultValue={this.state[0].status}
                        />
                     </td>
                     <td className="table__value">
                        <input
                           onChange={inputValue}
                           className="table__input table__input-active"
                           type="text"
                           defaultValue={this.state[0].nickname}
                        />
                     </td>
                     <td className="table__value">
                        <input
                           onChange={inputValue}
                           className="table__input table__input-active"
                           type="text"
                           defaultValue={this.state[0].univ}
                        />
                     </td>
                     <td className="table__value">
                        <input
                           onChange={inputValue}
                           className="table__input table__input-active"
                           type="text"
                           defaultValue={this.state[0].job}
                        />
                     </td>
                     <td>
                        <button onClick={edit} className="table__edit">
                           edit
                        </button>
                     </td>
                  </tr>
               </tbody>
            </table>
         </>
      );
   }
}

export default Student;

// ID	NAME	AGE	ADDRESS	STATUS	NICKNAME	UNIV	JOB	EDIT
