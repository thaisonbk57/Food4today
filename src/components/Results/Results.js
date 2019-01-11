import React from "react";
import styled from "styled-components";

import Result from "./Result/Result";

const Results = styled.div`
  flex-basis: 25%;
  overflow-y: scroll;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 2px;
  }

  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }

  &::-webkit-scrollbar-thumb {
    background-color: darkgrey;
    outline: 1px solid slategrey;
  }
`;

export default function(props) {
  return (
    <Results>
      <Result />
      <Result />
      <Result active />
      <Result />
      <Result />
      <Result />
      <Result />
      <Result />
      <Result />
      <Result />
      <Result />
      <Result />
    </Results>
  );
}
