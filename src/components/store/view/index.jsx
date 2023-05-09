import React from "react";
import './view.scss'
export default class View extends React.Component {
   render() {
      let [address, activity, tel, email] = this.props.server
      return (
         <div  className="view">
            <div className="view__info"><p>address:</p> {address}</div>
            <div className="view__info"><p>activity:</p> {activity}</div>
            <div className="view__info"><p>tel:</p> {tel}</div>
            <div className="view__info"><p>email:</p> {email}</div>
         </div>
      );
   }
}



