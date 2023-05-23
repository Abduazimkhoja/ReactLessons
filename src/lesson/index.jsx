import { useState } from "react";
import {
   Container,
   ContainerDark,
   Login,
   LoginDark,
   SwitchThemes,
} from "./style";

export default function Lesson() {
   const [theme, setTheme] = useState(true);
   return (
      // <Container>
      <>
         {theme ? (
            <>
               <Container>
                  <Login.wrap>
                     <Login.title>Login</Login.title>
                     <form>
                        <Login.input type="text" placeholder="Username" />
                        <Login.input type="password" placeholder="Password" />
                        <Login.button>Login</Login.button>
                     </form>
                  </Login.wrap>
               </Container>
               <SwitchThemes onClick={() => setTheme(!theme)}>
                  Dark
               </SwitchThemes>
            </>
         ) : (
            <>
               <ContainerDark>
                  <LoginDark.wrap>
                     <LoginDark.title>Login</LoginDark.title>
                     <form>
                        <LoginDark.input type="text" placeholder="Username" />
                        <LoginDark.input
                           type="password"
                           placeholder="Password"
                        />
                        <LoginDark.button>Login</LoginDark.button>
                     </form>
                  </LoginDark.wrap>
               </ContainerDark>
               <SwitchThemes onClick={() => setTheme(!theme)}>
                  Light
               </SwitchThemes>
            </>
         )}
      </>
   );
}
