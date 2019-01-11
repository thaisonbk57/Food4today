import React, { Component } from "react";
import styled, { createGlobalStyle } from "styled-components";

import Header from "./components/Header/Header";
import Results from "./components/Results/Results";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Muli');

*, *::after, *::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body, html {
  background-image: linear-gradient(to right bottom, #fbdb89, #f48982);
  height: 100vh;
  font-family: 'Muli', sans-serif;
}
`;

const App = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  height: 90vh;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: auto;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
`;

const Main = styled.main`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  background: #1dd1a1;
`;

export default class extends Component {
  render() {
    return (
      <App>
        <GlobalStyle />
        <Header />
        <Main>
          <Results />
          <h2>Recipe</h2>
          <h2>Shopping list</h2>
        </Main>
      </App>
    );
  }
}
