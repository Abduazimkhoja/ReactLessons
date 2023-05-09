import React from "react";
import Card from "./card";
import "./store.scss";
import { server } from "../../server";
// import Add from "./add";
import Form from "./form";
import { ReactComponent as AddStore } from "../../assets/icon/add.svg";

export default class Store extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         data: server,
         status: false,
         id: 0,
         name: "",
         owner: "",
         address: "",
         activity: "",
         tel: "",
         email: "",
         image: { url: "", alt: "" },
      };
   }
   render() {

      const form = React.createRef();
      const open = () => {
         if (!this.state.status) {
            form.current.style.cssText = "display:flex";
            this.setState({ status: true });
         } else {
            form.current.style.cssText = "display:none";
            this.setState({ status: false });
         }
      };

      const onChange = ({ target: { value, name } }) => {
         this.setState({ [name]: value });
      };

      const onAdd = () => {
         let {
            id,
            name,
            owner,
            address,
            activity,
            tel,
            email,
            image: { url, alt },
         } = this.state;
         let stores = {
            id,
            owner,
            name,
            address,
            activity,
            tel,
            email,
            image: { url, alt },
         };
         this.setState({ data: [...this.state.data, stores] });
         // console.log(this.state);

         console.log(this.state.data);
      };
      return (
         <>
            <div className="store container">
               <div className="store__cards">
                  {this.state.data.map(
                     ({ id, name, owner, image: { url, alt }, address, activity, tel, email}) => {
                        return <Card view = {[address, activity, tel, email]} card={[id, name, owner, url, alt]} />;
                     }
                  )}
                  <button onClick={open} className="card add">
                     <AddStore
                        className="card__icon add__icon"
                        style={{ stroke: "#808080" }}
                     />
                     <div className="card__title add__title">add store</div>
                  </button>
               </div>
               <div ref={form} className="store__form">
                  <Form data = {this.state.data} change={onChange} add={onAdd} open={open} />
               </div>
            </div>
         </>
      );
   }
}
