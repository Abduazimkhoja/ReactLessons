import React from "react";
import { Head, Link, List } from "./style";

export default function Header() {
   return (
      <Head>
         <nav>
            <List>
               <li>
                  <Link to="/home">home</Link>
               </li>
               <li>
                  <Link to="/about">about</Link>
               </li>
               <li>
                  <Link to="/product">product</Link>
               </li>
            </List>
         </nav>
      </Head>
   );
}
