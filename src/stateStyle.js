import styled, { css } from "styled-components";

// style component: Container
export const Container = styled("div")`
   display: flex;
   background: #ff0;
`;

// {css}
const common = css`
   height: fit-content;
   padding: 10px;

   font-weight: 400;
   color: blue;

   border: 1px solid black;
`;

export const Title = styled.h1`
   ${common}
   font-size: 20px;
`;
export const SubTitle = styled.h1`
   ${common}
   font-size: 14px;
`;

// Props
// const getSize = (props) => {
//    switch (props.type) {
//       case 'large': return "200px"
//       case 'medium': return "150px"
//       case 'small': return "100px"
//       default: return "150px"
//    }
// };

const getSize = (props) => {
   return {
      large: "200px",
      medium: "150px",
      small: "100px",
   }[props.type || "medium"];
};

export const Box = styled.div`
   align-items: center;
   justify-content: center;
   font-size: 28px;
   width: ${getSize};
   height: ${getSize};
   border: 2px solid blue;
   margin: 10px;
`;
