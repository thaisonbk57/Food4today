import React from "react";
import styled from "styled-components";

import logoImg from "./../../assets/img/logo.png";

const Logo = styled.div`
  width: 180px;
  padding-left: 40px;

  & img {
    max-width: 100%;
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
