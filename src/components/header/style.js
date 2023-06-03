import { NavLink } from "react-router-dom";
import styled, { css, keyframes } from "styled-components";

export const Head = styled.header`
   width: 100%;
   height: 44px;

   background: #000;
   color: #fff;
`;

export const Link = styled(NavLink)`
   color: #fff;
   text-decoration: none;
`
export const List = styled.ul`
   height: 44px;

   display: flex;
   align-items: center;
   justify-content: space-evenly;
`