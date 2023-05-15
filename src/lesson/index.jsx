import React, { useState } from "react";
import { people } from "../mock";
import { Box, BoxRed } from "./style";

import { ThemeProvider, createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
   body {
      background: ${(props) => props.theme.bg} ;
      color: ${(props) => props.theme.cl} ;
   }
`;

export default class User extends React.Component {
   state = {
      theme: false,
   };

   render() {
      const theme = {
         bg: this.state.theme ? "white" : "black",
         cl: this.state.theme ? "black" : "white",
      };

      return (
         <ThemeProvider theme={theme}>
            <GlobalStyle />
            <button onClick={() => this.setState({ theme: !this.state.theme })}>
               RE Theme
            </button>
            <Box type="small">small</Box>
            <Box type="medium">medium</Box>
            <Box type="large">large</Box>
            <Box>
               large <h1 className="h1">h1</h1>
            </Box>
            <BoxRed>Box red</BoxRed>
         </ThemeProvider>
      );
   }
}
