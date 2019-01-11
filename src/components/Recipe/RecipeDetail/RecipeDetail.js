import React from "react";
import styled from "styled-components";

import RecipeCookingTime from "./RecipeCookingTime/RecipeCookingTime";

export default function(props) {
  const RecipeDetail = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  `;

  return (
    <RecipeDetail>
      <RecipeCookingTime />
    </RecipeDetail>
  );
}
