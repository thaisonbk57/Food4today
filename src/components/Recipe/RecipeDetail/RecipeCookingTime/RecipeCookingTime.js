import React from "react";
import styled from "styled-components";
import icons from "./../../../../assets/icons.svg";

const RecipeControllBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 50px 40px 30px;
  background: #ddd;
`;

const RecipeInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .recipeInfo--icon {
    svg {
      height: 20px;
      width: 20px;
      fill: orangered;
      color: orangered;
    }

    .recipeLikeBtn {
      height: 45px;
      width: 45px;
      cursor: pointer;
      transition: 0.2s;

      &:hover {
        transform: scale(1.2);
      }
    }
  }

  .recipeInfo--text {
    margin-left: 10px;
    font-size: 18px;
    text-transform: uppercase;
  }

  .servingController {
    font-size: 20px;
    display: flex;
    margin-left: 10px;
    justify-content: space-between;

    span {
      background: orangered;
      height: 20px;
      width: 20px;
      display: block;
      position: relative;
      margin-left: 14px;
      border-radius: 50%;
      transition: all 0.2s;
      cursor: pointer;

      &:before {
        content: "";
        display: block;
        position: absolute;
        z-index: 1;
        background: white;
        height: 2px;
        width: 14px;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      }

      &:hover {
        transform: scale(1.1) translateY(-2px);
        box-shadow: 0 2px 8px gray;
      }
    }

    .increase:after {
      content: "";
      display: block;
      position: absolute;
      z-index: 1;
      background: white;
      height: 2px;
      width: 14px;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%) rotate(90deg);
    }
  }
`;

export default function(props) {
  return (
    <RecipeControllBar>
      <RecipeInfo>
        <span className="recipeInfo--icon">
          <svg>
            <use href={`${icons}#alarm-clock`} />
          </svg>
        </span>
        <span className="recipeInfo--text">45 minutes</span>
      </RecipeInfo>
      <RecipeInfo>
        <span className="recipeInfo--icon">
          <svg>
            <use href={`${icons}#man-user`} />
          </svg>
        </span>
        <span className="recipeInfo--text">4 Servings</span>
        <div className="servingController">
          <span className="decrease" />
          <span className="increase" />
        </div>
      </RecipeInfo>
      <RecipeInfo>
        <span className="recipeInfo--icon">
          <svg className="recipeLikeBtn">
            <use href={`${icons}#heart`} />
          </svg>
        </span>
      </RecipeInfo>
    </RecipeControllBar>
  );
}
