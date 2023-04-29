import React from "react";

class Student extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         count: 0,
         inputName: "",
         select: "",
         checked: "",
      };
   }
   render() {
      const plus = () => {
         this.setState({ count: this.state.count + 1 });
      };
      const minus = () => {
         this.setState({ count: this.state.count - 1 });
      }; 

      const onChange = (event) => {
         this.setState({inputName: event.target.value})
      }

      const onSelect = (event) => {
         this.setState({select: event.target.value})
      }

      const onCheckbox = (event) => {
         this.setState({checked: `${event.target.checked}`})
      }
      return (
         <>
            <h1>State {this.state.count}</h1>
            <button onClick={plus}>+</button>
            <button onClick={minus}>-</button>
            <h1>Name: {this.state.inputName}</h1>
            <input onChange={onChange}type="text" placeholder="Name"/>
            <h1>Select: {this.state.select}</h1>
            <select onChange={onSelect} name="" id="">
               <option value="male">male</option>
               <option value="female">female</option>
            </select>
            <h1>Checked: {this.state.checked}</h1>
            <input onChange={onCheckbox} type="checkbox" name="" id="" />
         </>
      );
   }
}

export default Student;
