import React from "react";
import styled from "styled-components";

const SearchButton = styled.button`
  padding: 13px 30px;
  font-size: 14px;
  background: linear-gradient(to right bottom, #fbdb89, #f48982);
  border: none;
  border-radius: 100px;
  transition: all 0.3s;
  color: #fff;
  font-weight: 500;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &:hover {
    transform: scale(1.1);
  }
`;

export default function(props) {
  return <SearchButton type="submit">SEARCH</SearchButton>;
}
