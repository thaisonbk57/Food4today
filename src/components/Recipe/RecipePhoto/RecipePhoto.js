import React from "react";
import styled from "styled-components";

// TEST
import photo from "./../../../assets/img/test-7.jpg";

export default function(props) {
  const PhotoFrame = styled.figure`
    position: relative;
  `;

  const Img = styled.img`
    display: block;
    width: 100%;
  `;

  const Caption = styled.figcaption`
    position: absolute;
    bottom: 0;
    left: 50%;
    text-align: center;
    width: 70%;
    transform: translateX(-50%) skewY(-10deg);

    span {
      font-size: 38px;
      font-weight: 600;
      text-transform: uppercase;
      color: white;
      background-image: linear-gradient(to right bottom, #fbdb89, #f48982);
      box-decoration-break: clone;
      line-height: 1.5;
      padding: 10px;
    }
  `;

  return (
    <PhotoFrame>
      <Img src={photo} />
      <Caption>
        <span>Pasta with Tomato cream sauce</span>
      </Caption>
    </PhotoFrame>
  );
}
