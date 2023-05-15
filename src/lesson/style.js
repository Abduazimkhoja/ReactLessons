import styled, { css } from "styled-components";

const boxWidth = ({ type }) =>
   ({ small: "100px", medium: "150px", large: "200px" }[type || "medium"]);

const center = css`
   display: flex;
   align-items: center;
   justify-content: center;
`

export const Box = styled.div`
   width: ${boxWidth};
   height: ${boxWidth};
   margin: 20px;

   ${center}

   font-size: 20px;
   color: #fff;
   background: #000;
   &:hover {
      background: #ff0;
      color: #000;
   }
`;

