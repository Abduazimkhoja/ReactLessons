import React from "react";
import { Head, Link, List } from "./style";

export default function Header() {
   return (
      <Head>
         <nav>
            <List>
               <li>
                  <Link to="/home" activeStyle={{color: "#f00"}}>home</Link>
               </li>
               <li>
                  <Link to="/about" activeStyle={{color: "#f00"}}>about</Link>
               </li>
               <li>
                  <Link to="/product" activeStyle={{color: "#f00"}}>product</Link>
               </li>
            </List>
         </nav>
      </Head>
   );
}
