import React, { useState } from "react";
import { people } from "../mock";
import "./style.scss";

export default class User extends React.Component {
   state = {
      data: people,
      select: "id",
      clicked: null,
   };

   render() {
      // delete
      const onDelete = (id) => {
         this.setState({ data: this.state.data.filter((v) => v.id !== id) });
      };

      // search
      const onChange = ({ target: { value } }) => {
         this.setState({
            data: people.filter((v) =>
               `${v[this.state.select]}`.includes(value)
            ),
         });
      };

      // select
      const onSelect = ({ target: { value } }) => {
         this.setState({ select: value });
      };

      // sort
      const onFilter = () => {
         this.setState({
            data: this.state.data.sort((a, b) =>
               `${a[this.state.select]}`.localeCompare(b[this.state.select])
            ),
         });
      };

      // clicked User
      const clickedUser = (obj) => {
         this.state.clicked
            ? this.setState({ clicked: null })
            : this.setState({ clicked: obj });
      };

      // edit
      const onEdit = (event) => {
         let {target: {value, name}} = event
         this.setState({clicked: {...this.state.clicked, [name]:value}})
      }

      // save 
      const onSaveUser = () => {
         this.setState({data: 
            this.state.data.map(v => v.id === this.state.clicked.id ? this.state.clicked: v)
         })
         clickedUser()
      }

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
               <button onClick={onFilter}>Sort</button>
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
                  {this.state.data.map((obj) => {
                     let {
                        id,
                        name,
                        age,
                        address,
                        status,
                        nickname,
                        univ,
                        job,
                     } = obj;
                     return (
                        <tr key={id} className="table__block">
                           <td>{id}</td>
                           <td>
                              {" "}
                              {this.state.clicked?.id === id ? (
                                 <input name="name" onChange={onEdit} value={this.state.clicked.name} type="text" />
                              ) : (
                                 name
                              )}
                           </td>
                           <td>
                              {this.state.clicked?.id === id ? (
                                 <input name="age" onChange={onEdit} value={this.state.clicked.age} type="text" />
                              ) : (
                                 age
                              )}
                           </td>
                           <td>
                              {this.state.clicked?.id === id ? (
                                 <input name="address" onChange={onEdit} value={this.state.clicked.address} type="text" />
                              ) : (
                                 address
                              )}
                           </td>
                           <td>
                              {this.state.clicked?.id === id ? (
                                 <input name="status" onChange={onEdit} value={this.state.clicked.status} type="text" />
                              ) : (
                                 status
                              )}
                           </td>
                           <td>
                              {this.state.clicked?.id === id ? (
                                 <input name="nickname" onChange={onEdit} value={this.state.clicked.nickname} type="text" />
                              ) : (
                                 nickname
                              )}
                           </td>
                           <td>
                              {this.state.clicked?.id === id ? (
                                 <input name="univ" onChange={onEdit} value={this.state.clicked.univ} type="text" />
                              ) : (
                                 univ
                              )}
                           </td>
                           <td>
                              {this.state.clicked?.id === id ? (
                                 <input name="job" onChange={onEdit} value={this.state.clicked.job} type="text" />
                              ) : (
                                 job
                              )}
                           </td>
                           <td>
                              {this.state.clicked?.id === id ? (
                                 <>
                                    <button onClick={onSaveUser}>save</button>
                                    <button onClick={clickedUser}>
                                       cancel
                                    </button>
                                 </>
                              ) : (
                                 <button onClick={() => clickedUser(obj)}>
                                    edit
                                 </button>
                              )}
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
