import React from 'react'
import "./App.scss";
import { Button } from "./style component/style";
import { ThemeProvider, createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
   body {
      background: ${(props) => props.theme.bg};
      color: ${(props) => props.theme.cl};
   }
`;

export default class App extends React.Component {
   state = {
      light: false,
   };

   render() {
      const theme = {
         bg: this.state.light ? "white" : "black",
         cl: this.state.light ? "black" : "white",
      };

      return (
         <>
            <ThemeProvider theme={theme}>
               <GlobalStyle/>
                  <h1>Theme</h1>
                  <button onClick={() => {this.setState({light: !this.state.light})}}>RE Theme</button>
            </ThemeProvider>
         </>
      );
   }
}
