import { keyframes, styled } from "styled-components";

const animation = keyframes`
   from {
      transform: rotate(0deg);
   }
   to {
      transform: rotate(360deg);
   }
`

export const Button = styled.button`
   width: 200px;
   height: 200px;
   background-color: #ff0;
   animation: ${animation} 2s linear infinite;
`

export const ActiveButton = styled(Button)