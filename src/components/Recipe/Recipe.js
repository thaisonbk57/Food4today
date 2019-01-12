import React from "react";
import styled from "styled-components";

import RecipePhoto from "./RecipePhoto/RecipePhoto";
import RecipeCookingTime from "./RecipeCookingTime/RecipeCookingTime";
import RecipeIngredients from "./RecipeIngredients/RecipeIngredients";
import Button from "./../../components/UI/Button/Button";

export default function(props) {
  const Recipe = styled.div`
    display: flex;
    flex-direction: column;
    flex-basis: 50%;
    background: #10ac84;
    overflow-y: scroll;
    overflow-x: hidden;

    &::-webkit-scrollbar {
      width: 1px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: black;
    }

    .howToCookIt {
      margin-top: 50px;
      background: #18c396;
      h3 {
        color: #ff6b6b;
        text-align: center;
        transform: skewY(-8deg);
        margin-bottom: 30px;
        font-size: 30px;
        padding-top: 20px;
      }

      p {
        text-align: center;
      }
    }
  `;

  return (
    <Recipe>
      <RecipePhoto />
      <RecipeCookingTime />
      <RecipeIngredients />
      <Button width={300}>ADD TO SHOPPING LIST</Button>
      <div className="howToCookIt">
        <h3>How to cook it</h3>
        <p>
          This recipe was carefully designed and tested by{" "}
          <b>The Pioneer Woman</b>. Please check out directions at their
          website.
        </p>
        <Button width={130}>
          <a href="/" target="_blank">
            DIRECTION
          </a>
        </Button>
      </div>
    </Recipe>
  );
}
