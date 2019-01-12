import React from "react";
import styled, { keyframes } from "styled-components";

// Create the keyframes
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  } to {
    transform: rotate(360deg);
  }
`;

export default function(props) {
  const Loader = styled.div`
    margin: 100px auto;
    border: ${props.borderWidth || 8}px solid #f3f3f3;
    border-radius: 50%;
    border-top: ${props.borderWidth || 8}px solid #3498db;
    width: ${props.width || 50}px;
    height: ${props.width || 50}px;
    animation: ${rotate} 2s linear infinite;
  `;
  return <Loader />;
}
