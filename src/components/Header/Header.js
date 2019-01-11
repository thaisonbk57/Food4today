import React from "react";
import styled from "styled-components";

import Logo from "./../Logo/Logo";
import SearchForm from "./../../containers/SearchForm/SearchForm";

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #10ac84;
  padding: 20px 0;
`;

export default function(props) {
  return (
    <Header>
      <Logo />
      <SearchForm />
      <div />
    </Header>
  );
}
