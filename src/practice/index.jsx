import React from "react";
import { people } from "../mock";
import "./practice.scss";
import { Container } from "./style";

export default class Practice extends React.Component {
   state = {
      data: people,
      status: false,
      hidden: "user-hidden",
      newUser: {
         id: "",
         name: "",
         age: "",
         address: "",
         status: "",
         nickname: "",
         univ: "",
         job: "",
      },
      select: "id",
      active: "",
   };

   render() {
      const onDelete = (peopleId) => {
         this.setState({
            data: this.state.data.filter(({ id }) => id !== peopleId),
         });
      };

      // ADD
      const onAdd = () => {
         this.state.hidden
            ? this.setState({ hidden: "" })
            : this.setState({ hidden: "user-hidden", newUser: "" });
      };

      const onChange = ({ target: { value, name } }) => {
         this.setState({
            newUser: {
               ...this.state.newUser,
               [name]: value,
               id: this.state.data.length + 1,
            },
         });
      };

      const onSave = () => {
         this.setState({ data: [...this.state.data, this.state.newUser] });
         onAdd();
      };

      // search
      const onSearch = ({ target: { value } }) => {
         this.setState({
            data: people.filter((obj) =>
               `${obj[this.state.select]}`
                  .toLowerCase()
                  .includes(value.toLowerCase())
            ),
         });
      };

      const onSelect = ({ target: { value } }) => {
         this.setState({ select: value });
      };

      // sort
      const onSort = () => {
         this.setState({
            data: this.state.data.sort((a, b) =>
               `${a[this.state.select]}`.localeCompare(
                  `${b[this.state.select]}`
               )
            ),
         });
      };

      // Edit
      const onEdit = (value, boolean) => {
         if (boolean) {
            this.setState({ active: null });
         } else {
            this.setState({ active: value });
         }
      };

      // 
      const onEditChange = ({target: {value, name}}) => {
         this.setState({active: {...this.state.active, [name]: value}})
      }

      // save
      const onEditSave = (obj) => {
         this.setState({
            data: this.state.data.map((user) =>
               obj.id === user.id ? this.state.active : user
            ),
         });
         onEdit()
      };

      return (
         <Container>
            {/* serch */}
            <div className="search">
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
               <input onChange={onSearch} type="search" placeholder="search" />
               <button onClick={onSort} className="sort">
                  sort
               </button>
            </div>

            {/* add */}
            <button onClick={onAdd} className="button">
               add user
            </button>
            <div className={`user ${this.state.hidden}`}>
               <div className="user__block">
                  <div className="user__inputs">
                     <input
                        onChange={onChange}
                        placeholder="name"
                        name="name"
                        type="text"
                     />
                     <input
                        onChange={onChange}
                        placeholder="age"
                        name="age"
                        type="number"
                     />
                     <input
                        onChange={onChange}
                        placeholder="address"
                        name="address"
                        type="text"
                     />
                     <input
                        onChange={onChange}
                        placeholder="status"
                        name="status"
                        type="text"
                     />
                     <input
                        onChange={onChange}
                        placeholder="nickname"
                        name="nickname"
                        type="text"
                     />
                     <input
                        onChange={onChange}
                        placeholder="univ"
                        name="univ"
                        type="text"
                     />
                     <input
                        onChange={onChange}
                        placeholder="job"
                        name="job"
                        type="text"
                     />
                     <button onClick={onSave}>save</button>
                     <button onClick={onAdd}>cancel</button>
                  </div>
               </div>
            </div>

            {/* table */}
            <table className="practice" border={1}>
               <thead>
                  <tr>
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
               <tbody>
                  {this.state.data.map((value) => {
                     let {
                        id,
                        name,
                        age,
                        address,
                        status,
                        nickname,
                        univ,
                        job,
                     } = value;
                     return (
                        <tr key={id}>
                           {this.state.active?.id !== id ? (
                              <>
                                 <td>{id}</td>
                                 <td>{name}</td>
                                 <td>{age}</td>
                                 <td>{address}</td>
                                 <td>{status}</td>
                                 <td>{nickname}</td>
                                 <td>{univ}</td>
                                 <td>{job}</td>
                              </>
                           ) : (
                              <>
                                 <td>{id}</td>
                                 <td>
                                    <input
                                       type="text"
                                       value = {this.state.active.name}
                                       name="name"
                                       onChange={onEditChange}
                                    />
                                 </td>
                                 <td>
                                    <input
                                       name="age"
                                       value={this.state.active.age}
                                       onChange={onEditChange}
                                       type="text"
                                    />
                                 </td>
                                 <td>
                                    <input
                                       name="address"
                                       value={this.state.active.address}
                                       onChange={onEditChange}
                                       type="text"
                                    />
                                 </td>
                                 <td>
                                    <input
                                       name="status"
                                       value={this.state.active.status}
                                       onChange={onEditChange}
                                       type="text"
                                    />
                                 </td>
                                 <td>
                                    <input
                                       name="nickname"
                                       value={this.state.active.nickname}
                                       onChange={onEditChange}
                                       type="text"
                                    />
                                 </td>
                                 <td>
                                    <input
                                       name="univ"
                                       value={this.state.active.univ}
                                       onChange={onEditChange}
                                       type="text"
                                    />
                                 </td>
                                 <td>
                                    <input
                                       name="job"
                                       value={this.state.active.job}
                                       onChange={onEditChange}
                                       type="text"
                                    />
                                 </td>
                              </>
                           )}
                           <td>
                              {this.state.active?.id === id ? (
                                 <>
                                    <button onClick={() => onEditSave(value)}>
                                       save
                                    </button>
                                    <hr />
                                    <button
                                       onClick={() =>
                                          onEdit(
                                             value,
                                             this.state.active?.id === id
                                          )
                                       }
                                    >
                                       cancel
                                    </button>
                                 </>
                              ) : (
                                 <button
                                    onClick={() =>
                                       onEdit(
                                          value,
                                          this.state.active?.id === id
                                       )
                                    }
                                 >
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
         </Container>
      );
   }
}
