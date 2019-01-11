import React from "react";
import styled from "styled-components";

import Result from "./Result/Result";

const Results = styled.div`
  flex: 1 0 25%;
  overflow-y: scroll;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 1px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: black;
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
