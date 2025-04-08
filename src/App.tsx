import { ThemeProvider } from "styled-components";
import {Header}  from "./components/MenuHamburger/Header";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { Introduction } from "./components/Introduction";
import { Main } from "./components/Main";
import { Works } from "./components/Works";
import { Footer } from "./components/Footer";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle/>
      <Header/>
      <Introduction/>
      <Main/>
      <Works/>
      <Footer/>
    </ThemeProvider>
  )
}
