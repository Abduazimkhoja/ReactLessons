import React from "react";
import "./table.scss";
import { people } from "./mock";

class Student extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         data: people,

         name: "",
         age: "",
         address: "",
         status: "",

         createError: "",

         selectSearch: "name",

         active: null,
      };
   }

   render() {
      // SEARCH
      const search = (event) => {
         this.setState({
            data: people.filter((item) =>
               `${item[this.state.selectSearch]}`.includes(event.target.value)
            ),
         });
      };

      // ADD
      const create = () => {
         let { name, age, address, status } = this.state;
         if (
            name.length > 0 &&
            age > 0 &&
            address.length > 0 &&
            status.length > 0
         ) {
            let user = {
               id: this.state.data.length + 1,
               name,
               age,
               address,
               status,
               nickname: "1",
               univ: "1",
               job: "1",
            };
            this.setState({
               data: [...this.state.data, user],
               name: "",
               age: "",
               address: "",
               status: "",
               createError: "",
            });
         } else {
            this.setState({
               createError: "fill in all Input!",
            });
         }
      };

      // SELECT SEARCH
      const selectSearch = (event) => {
         this.setState({ selectSearch: event.target.value });
      };

      // DELETE
      const onDelete = (id) => {
         this.setState({
            data: this.state.data.filter((v) => v.id !== id),
         });
      };

      // EDIT
      const onEdit = (data, isSave) => {
         if (isSave) {
            let res = this.state.data.map((value) =>
               value.id == this.state.active.id
                  ? {
                       ...value,
                       name: this.state.name,
                       age: this.state.age,
                       address: this.state.address,
                       status: this.state.status,
                    }
                  : value
            );
            this.setState({ active: null, data: res });
         } else {
            this.setState({
               name: data.name,
               age: data.age,
               address: data.address,
               status: data.status,
               active: { ...data },
            });
         }
      };

      // multi state change
      const onChange = (event) => {
         this.setState({ [event.target.name]: event.target.value });
      };

      return (
         <div>
            {/* SEARCH */}
            <div className="search">
               {/* SELECT */}
               <select onChange={selectSearch} name="" id="">
                  <option value="name">name</option>
                  <option value="id">id</option>
                  <option value="age">age</option>
                  <option value="address">address</option>
                  <option value="status">status</option>
               </select>
               <input
                  name="search"
                  onChange={search}
                  className="search__input"
                  type="search"
                  placeholder="Search"
               />
            </div>

            {/* ADD */}
            <div className="add">
               <input
                  name="name"
                  onChange={onChange}
                  value={this.state.name}
                  type="text"
                  className="add__input"
                  placeholder="name"
               />
               <input
                  name="age"
                  onChange={onChange}
                  value={this.state.age}
                  type="text"
                  className="add__input"
                  placeholder="age"
               />
               <input
                  name="address"
                  onChange={onChange}
                  value={this.state.address}
                  type="text"
                  className="add__input"
                  placeholder="address"
               />
               <input
                  name="status"
                  onChange={onChange}
                  value={this.state.status}
                  type="text"
                  className="add__input"
                  placeholder="status"
               />
               <button onClick={create}>Add</button>
               <p>{this.state.createError}</p>
            </div>

            {/* TABLE */}
            <table className="table">
               <thead className="table__head">
                  <tr>
                     <th>ID</th>
                     <th>NAME</th>
                     <th>AGE</th>
                     <th>ADDRESS</th>
                     <th>STATUS</th>
                     <th>NICKNAME</th>
                     <th>UNIV</th>
                     <th>JOB</th>
                     <th>EDIT</th>
                  </tr>
               </thead>

               <tbody className="table__body">
                  {this.state.data.map(
                     ({
                        id,
                        name,
                        age,
                        address,
                        status,
                        nickname,
                        univ,
                        job,
                     }) => {
                        return (

                           // EDIT
                           <tr>
                              <td>{id}</td>
                              <td>
                                 {this.state.active?.id === id ? (
                                    <input
                                       onChange={onChange}
                                       value={this.state.name}
                                       type="text"
                                       name="name"
                                       id=""
                                    />
                                 ) : (
                                    name
                                 )}
                              </td>
                              <td>
                                 {this.state.active?.id === id ? (
                                    <input
                                       onChange={onChange}
                                       value={this.state.age}
                                       type="text"
                                       name="age"
                                       id=""
                                    />
                                 ) : (
                                    age
                                 )}
                              </td>
                              <td>
                                 {this.state.active?.id === id ? (
                                    <input
                                       onChange={onChange}
                                       value={this.state.address}
                                       type="text"
                                       name="address"
                                       id=""
                                    />
                                 ) : (
                                    address
                                 )}
                              </td>
                              <td>
                                 {this.state.active?.id === id ? (
                                    <input
                                       onChange={onChange}
                                       value={this.state.status}
                                       type="text"
                                       name="status"
                                       id=""
                                    />
                                 ) : (
                                    status
                                 )}
                              </td>
                              <td>{nickname}</td>
                              <td>{univ}</td>
                              <td>{job}</td>

                              {/* DELETE */}
                              <td id="table__button">
                                 <button
                                    onClick={() =>
                                       onEdit(
                                          { id, name, age, address, status },
                                          this.state.active?.id === id
                                       )
                                    }
                                 >
                                    {this.state.active?.id === id
                                       ? "save"
                                       : "edit"}
                                 </button>
                                 <button onClick={() => onDelete(id)}>
                                    delete
                                 </button>
                              </td>
                           </tr>
                        );
                     }
                  )}
               </tbody>
            </table>
         </div>
      );
   }
}

export default Student;

// ID	NAME	AGE	ADDRESS	STATUS	NICKNAME	UNIV	JOB	EDIT
