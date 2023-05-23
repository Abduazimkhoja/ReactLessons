import styled, { css, keyframes } from "styled-components";

// export const Login = styled.div``;

// Login.wrap = styled.div`
//    width: 300px;
//    height: 350px;
//    padding: 20px;

//    display: flex;
//    flex-direction: column;
//    align-items: center;
//    justify-content: center;

//    border-radius: 20px;
//    background: #fff;
// `;

// Login.title = styled.h3`
//    font-size: 30px;
//    margin-bottom: 10px;
// `;

// Login.form = styled.form``;

// Login.input = styled.input`
//    width: 100%;
//    height: 40px;
//    margin-bottom: 15px;

//    bottom: none;
//    outline: none;
//    border-bottom: 1px solid #999;
//    padding-left: 5px;
//    background: none;
//    &:focus,
//    &:hover {
//       border-bottom: 1px solid rgba(148, 187, 233, 1);
//    }
// `;

// Login.button = styled.button`
//    width: 100%;
//    height: 40px;
//    margin-top: 20px;
//    border-radius: 20px;
//    cursor: pointer;

//    background: rgba(148, 187, 233, 1);
//    color: #fff;
//    &:hover {
//       background: rgba(148, 187, 233, 0.8);
//    }
// `;

export const Login = {
   wrap: styled.div`
      width: 300px;
      height: 350px;
      padding: 20px;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      border-radius: 20px;
      background: #fff;
   `,
   title: styled.h3`
      font-size: 30px;
      margin-bottom: 20px;
   `,
   input: styled.input`
      width: 100%;
      height: 40px;
      margin-bottom: 15px;

      bottom: none;
      outline: none;
      border-bottom: 1px solid #999;
      padding-left: 5px;
      background: none;
      &:focus,
      &:hover {
         border-bottom: 1px solid rgba(148, 187, 233, 1);
      }
   `,
   button: styled.button`
      width: 100%;
      height: 40px;
      margin-top: 20px;
      border-radius: 20px;
      cursor: pointer;

      background: rgba(148, 187, 233, 1);
      color: #fff;
      &:hover {
         background: rgba(148, 187, 233, 0.8);
      }
   `,
};

export const Container= styled.div`
   height: 100vh;

   display: flex;
   align-items: center;
   justify-content: center;

   background: rgba(148, 187, 233, 1);
`;

export const SwitchThemes = styled.button`
   padding: 10px;
   cursor: pointer;
   background: none;

   position: absolute;
   top: 20px;
   right: 20px;
   &:hover {
      color: #303030;
   }
`;


// Dark
export const LoginDark = {
   wrap: styled.div`
      width: 300px;
      height: 350px;
      padding: 20px;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      border-radius: 20px;
      background: #303030;
      body {
         background: #909090 ;
      }
   `,
   title: styled.h3`
      font-size: 30px;
      margin-bottom: 20px;
      color: #fff;
   `,
   input: styled.input`
      width: 100%;
      height: 40px;
      margin-bottom: 15px;

      bottom: none;
      outline: none;
      border-bottom: 1px solid #999;
      padding-left: 5px;
      background: none;
      &:focus,
      &:hover {
         border-bottom: 1px solid #fff;
      }
   `,
   button: styled.button`
      width: 100%;
      height: 40px;
      margin-top: 20px;
      border-radius: 20px;
      cursor: pointer;

      background: #909090;
   `,
};

export const ContainerDark = styled.div`
   height: 100vh;

   display: flex;
   align-items: center;
   justify-content: center;

   
   background: #909090 ;
   /* background: rgba(148, 187, 233, 1); */
`;

export const SwitchThemesDark = styled.button`
   padding: 10px;
   cursor: pointer;
   background: none;

   position: absolute;
   top: 20px;
   right: 20px;
   &:hover {
      color: #303030;
   }
`;
