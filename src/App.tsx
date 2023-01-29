import { ThemeProvider } from "styled-components";
import { Form } from "./components/Form";
import { Header } from "./components/Header";
import { GlobalStyle } from "./Global/GlobalStyle";
import {GlobalTheme} from "./Global/GlobalTheme"

export function App() {

  return (
    <ThemeProvider theme={GlobalTheme}>
      <GlobalStyle/>
      <Header/>
      <Form/>
    </ThemeProvider>
  );
}


