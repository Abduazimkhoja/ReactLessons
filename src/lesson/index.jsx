import React, { useState } from "react";
import { people } from "../mock";
import "./style.scss";

export default class User extends React.Component {
   state = {
      data: people,
      select: "id",
   };

   render() {
      // delete
      const onDelete = (id) => {
         this.setState({ data: this.state.data.filter((v) => v.id !== id) });
      };

      // search
      const onChange = ({ target: { value } }) => {
         this.setState({
            data: people.filter((v) => `${v[this.state.select]}`.includes(value)),
         });
      };

      // select
      const onSelect = ({ target: { value } }) => {
         this.setState({ select: value });
      };

      // sort
      

      return (
         <div className="container">
            <div>
               <select onChange={onSelect} name="" id="">
                  <option value="id">id</option>
                  <option value="name">name</option>
                  <option value="age">age</option>
                  <option value="address">address</option>
                  <option value="status">status</option>
                  <option value="nickname">nickname</option>
                  <option value="univ">univ</option>
                  <option value="job">job</option>
               </select>
               <input onChange={onChange} type="text" placeholder="search" />
            </div>
            <table className="table">
               <thead className="table__head">
                  <tr className="table__block">
                     <th>id</th>
                     <th>name</th>
                     <th>age</th>
                     <th>address</th>
                     <th>status</th>
                     <th>nickname</th>
                     <th>univ</th>
                     <th>job</th>
                     <th>edit</th>
                     <th>delete</th>
                  </tr>
               </thead>
               <tbody className="table__body">
                  {this.state.data.map((data) => {
                     let {
                        id,
                        name,
                        age,
                        address,
                        status,
                        nickname,
                        univ,
                        job,
                     } = data;
                     return (
                        <tr key={id} className="table__block">
                           <td>{id}</td>
                           <td>{name}</td>
                           <td>{age}</td>
                           <td>{address}</td>
                           <td>{status}</td>
                           <td>{nickname}</td>
                           <td>{univ}</td>
                           <td>{job}</td>
                           <td>
                              <button>edit</button>
                           </td>
                           <td>
                              <button onClick={() => onDelete(id)}>
                                 delete
                              </button>
                           </td>
                        </tr>
                     );
                  })}
               </tbody>
            </table>
         </div>
      );
   }
}
