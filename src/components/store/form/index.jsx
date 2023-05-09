import React from "react";
import "./form.scss";
import { ReactComponent as Exclamation } from "../../../assets/icon/Exclamation point.svg";

export default class Form extends React.Component {
   render() {
      return (
         <form className="form">
            <div className="form__inputs">
               <label htmlFor="owner">
                  Owner name
                  <Exclamation />
               </label>
               <input onChange={this.props.change} name="owner" type="text" />
               <label htmlFor="name">
                  Company name
                  <Exclamation />
               </label>
               <input onChange={this.props.change} name="name" type="text" />
               <label htmlFor="address">
                  Address
                  <Exclamation />
               </label>
               <input onChange={this.props.change} name="address" type="text" />
               <label htmlFor="activity">
                  activity
                  <Exclamation />
               </label>
               <select onChange={this.props.change} name="activity" id="">
                  <option value="">bookshop</option>
                  <option value="">car shop</option>
                  <option value="">grocer</option>
                  <option value="">optician</option>
               </select>
               <label htmlFor="tel">
                  Phone
                  <Exclamation />
               </label>
               <input onChange={this.props.change} name="tel" type="tel" id="tel" />
               <label htmlFor="email">
                  Email
                  <Exclamation />
               </label>
               <input onChange={this.props.change} name="email" type="email" id="email" />
            </div>
            <div className="form__buttons">
               <input onClick={this.props.add} className="form__submit" type="button" value="Submit" />
               <input
                  onClick={this.props.open}
                  className="form__cancel"
                  type="button"
                  value="cancel"
               />
            </div>
         </form>
      );
   }
}
