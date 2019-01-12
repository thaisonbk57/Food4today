import React from "react";
import styled from "styled-components";

import logoImg from "./../../assets/img/logo.png";

const Logo = styled.div`
  padding-left: 40px;
  flex: 1 0 25%;

  & img {
    max-width: 150px;
    display: block;
  }
`;

export default function(props) {
  return (
    <Logo>
      <img src={logoImg} alt="forkily logo" />
    </Logo>
  );
}
