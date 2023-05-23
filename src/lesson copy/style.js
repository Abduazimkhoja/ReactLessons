import styled, { css, keyframes } from "styled-components";

export const Header = styled.header`
   height: 40px;
   display: flex;
   align-items: center;
   justify-content: center;
   background: #000;
   ul {
      display: flex;
      align-items: center;
      gap: 50px;
      li {
         text-transform: uppercase;
         list-style: none;
         color: #fff;
      }
   }
`;
