import React, { useState } from "react";
import { people } from "../mock";
import { Box } from "./style";

export default class User extends React.Component {
   state = {};

   render() {
      return (
         <div>
            <Box type="small">small</Box>
            <Box type="medium">medium</Box>
            <Box type="large">large</Box>
            <Box>large <h1 className="h1">h1</h1></Box>
         </div>
      );
   }
}
