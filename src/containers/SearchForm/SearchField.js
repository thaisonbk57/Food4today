import React from "react";
import styled from "styled-components";

const Input = styled.input`
  border: none;
  background: none;
  font-family: inherit;
  color: #333;
  font-size: 17px;

  &:focus {
    border: none;
    outline: none;
  }
`;

export default function(props) {
  return <Input onChange={props.onChange} value={props.value} />;
}
