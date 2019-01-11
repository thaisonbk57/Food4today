import React from "react";
import styled from "styled-components";

// test
import dishImg from "./../../../assets/img/test-4.jpg";

export default function(props) {
  const Result = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px;
    align-items: center;
    cursor: pointer;
    padding: 15px 0 15px 18px;
    background: ${props.active ? "#10ac84" : "#1dd1a1"};

    &:hover {
      background-color: #10ac84;
    }

    & .imgFrame {
      border-radius: 50%;
      overflow: hidden;
      height: 70px;
      width: 70px;
      background-image: url(${dishImg});
      background-size: cover;
      background-position: center;
    }
  `;

  const Recipe = styled.div`
    flex: 1;
    padding-left: 18px;

    .recipe--title {
      color: #fbdb89;
      text-transform: uppercase;
    }
  `;

  return (
    <Result>
      <div className="imgFrame" />
      <Recipe>
        <h3 className="recipe--title">Best Pizza ever</h3>
        <p className="recipe--source">101 cookbooks</p>
      </Recipe>
    </Result>
  );
}
