import React from "react";
import styled from "styled-components";

import Logo from "./../Logo/Logo";
import SearchForm from "./../../containers/SearchForm/SearchForm";
import icons from "./../../assets/icons.svg";

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #10ac84;
  padding: 20px 0;
`;

const LikeIcon = styled.svg`
  height: 50px;
  width: 50px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    transform: scale(1.1) translateY(-4px);
  }
`;

export default function(props) {
  return (
    <Header>
      <Logo />
      <SearchForm />
      <div
        style={{
          flex: "1 1 25%",
          textAlign: "right",
          paddingRight: "40px"
        }}
      >
        <LikeIcon>
          <use href={`${icons}#like`} />
        </LikeIcon>
      </div>
    </Header>
  );
}
