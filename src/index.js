import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import App from "./App";
import { orange,pink } from '@mui/material/colors';
const theme=createTheme({
  palette:{
    primary:pink
  }
})
const rootElement = document.getElementById("root");
ReactDOM.render(
  <ThemeProvider theme={theme}>
  <StrictMode>
    <App />
  </StrictMode>
  </ThemeProvider>,
  rootElement
);
