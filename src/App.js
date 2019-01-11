import React, { Component } from "react";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*, *::after, *::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
`;

const Wrapper = styled.div`
  background: orangered;
  font-size: 60px;
  color: papayawhip;
`;

class App extends Component {
  render() {
    return (
      <Wrapper>
        <GlobalStyle />
      </Wrapper>
    );
  }
}

export default App;
