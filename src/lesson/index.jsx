import React from "react";

export default class Lesson extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         count: 0,
      };
      console.log("constructor");
   }

   render() {
      console.log("render");

      return <></>;
   }
}
