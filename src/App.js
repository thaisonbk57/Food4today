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

const Wrapper = styled.div``;

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
