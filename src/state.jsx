import React from "react";
import { Box, Container, SubTitle, Title } from "./stateStyle";

export default class Student extends React.Component {
   render() {
      return (
         <Container>
            <Box type="large">Large</Box>
            <Box type="medium">Medium</Box>
            <Box type="small">Small</Box>
            <Title>Title</Title>
            <SubTitle>SubTitle</SubTitle>
         </Container>
      );
   }
}
