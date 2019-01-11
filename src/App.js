import React, { Component } from "react";
import styled, { createGlobalStyle } from "styled-components";

import Header from "./components/Header/Header";

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

const Wrapper = styled.div`
  width: 90vw;
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

class App extends Component {
  render() {
    return (
      <Wrapper>
        <GlobalStyle />
        <Header />
      </Wrapper>
    );
  }
}

export default App;
