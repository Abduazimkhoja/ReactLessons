import React from "react";
import "./card.scss";
import View from "../view";

export default class Card extends React.Component {
   render() {
      const view = React.createRef();
      let cur = false;
      const open = () => {
         if (!cur) {
            view.current.style.cssText = `display: flex`;
            cur = true;
         } else {
            view.current.style.cssText = `display: none`;
            cur = false
         }
      };
      const [id, name, owner, url, alt, address, activity, tel, email] =
         this.props.card;
      return (
         <div className="card">
            <img src={url} alt={alt} className="card__logo" />
            <div className="card__title">{name}</div>
            <div className="card__subtitle">{owner}</div>
            <button onClick={open} className="card__button">
               View
            </button>
            <div ref={view} style={{ display: "none" }}>
               <View server={this.props.view} />
            </div>
         </div>
      );
   }
}
