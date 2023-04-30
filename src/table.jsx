import React from "react";
import "./table.scss";
import { student } from "./mock";

class Student extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         data: student,
         name: "web",
         surname: "brain",
      };
   }
   render() {
      const onChange = (event) => {
         this.setState({ [event.target.name]: event.target.value });
      };

      const onFilter = (event) => {
         this.setState({
            data: student.filter((v) => {
               if (v.name.toLowerCase().includes(event.target.value.toLowerCase())) {
                  return v;
               }
            }),
         });
      };
      return (
         <>
            <h1>Name: {this.state.name}</h1>
            <input name="name" onChange={onChange} type="text" />

            <h1>Surname: {this.state.surname}</h1>
            <input name="surname" onChange={onChange} type="text" />

            <h1>Filter(reade)</h1>
            <input onChange={onFilter} type="text" defaultValue="filter" />

            {this.state.data.map(({ id, name, status }) => {
               return (
                  <h1 key={id}>
                     {id} {name} {status}
                  </h1>
               );
            })}
         </>
      );
   }
}

export default Student;
