import React from "react";
import styled from "styled-components";

import RecipePhoto from "./RecipePhoto/RecipePhoto";
import RecipeDetail from "./RecipeDetail/RecipeDetail";

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
  `;

  return (
    <Recipe>
      <RecipePhoto />
      <RecipeDetail />
    </Recipe>
  );
}
