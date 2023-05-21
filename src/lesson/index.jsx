import React from "react";
import FuncComponent from "../function component";

export default class Lesson extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         count: 0,
      };
      console.log("constructor");
   }

   componentWillMount() {
      // до render
      console.log("componentWillMount");
   }

   componentDidMount() {
      // после render
      console.log("componentDidMount");
   }

   componentWillReceiveProps() {
      // когда пришол prop
      console.log("componentWillReceiveProps");
   }

   shouldComponentUpdate() {
      // обновлятли component?
      console.log("shouldComponentUpdate");
      return true; // обновлять, On reRender
      // return false; // не обновлять, Off reRender
   }

   componentWillUpdate() {
      // до render, после prop
      console.log("componentWillUpdate");
   }

   componentDidUpdate() {
      // после перерисовки или рисовки DOM
      console.log("componentDidUpdate");
   }

   componentWillUnmount() {
      // после удаления элемента из DOM
      console.log("componentWillUnmount");
   }

   render() {
      console.log("render");

      return (
         <>
            {this.state.count}
            <button
               onClick={() => this.setState({ count: this.state.count + 1 })}
            >
               up + 1
            </button>

            {this.state.count % 2 == 0 ? <FuncComponent/>: <button>Button</button>}
         </>
      );
   }
}
