import React from "react";

export default class Lesson extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         count: 0,
      };
      this.plus = this.plus.bind(this)
   }
   // LIVE CIRCLE

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
      return false; // не обновлять, Off reRender
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

   // BINING

   plus() {
      this.setState({count: this.state.count + 1})
   }

   render() {
      console.log("render");
      return (
         <>
            <h2>{this.state.count}</h2>
            <button onClick={this.plus}></button>
         </>
      );
   }
}
