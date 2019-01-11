import React from "react";
import styled from "styled-components";

export default function(props) {
  const Button = styled.div`
    border: none;
    height: 40px;
    border-radius: 30px;
    transition: all 0.2s;
    background-image: linear-gradient(to right bottom, #fbdb89, #f48982);
    display: flex;
    padding: 20px;
    align-items: center;
    text-align: center;
    justify-content: center;
    cursor: pointer;
    margin: 20px auto;
    color: white;
    width: ${`${props.width}px`};

    &:focus {
      border: none;
    }
    &:hover {
      transform: scale(1.1);
    }
  `;

  return <Button>{props.children}</Button>;
}
