import React from "react";
import styled from "styled-components";

import icons from "./../../../../assets/icons.svg";

const Ingredient = styled.li`
  display: flex;
  float: left;
  flex-basis: 100%;
  padding: 8px 20px;
`;

const IngredientIcon = styled.svg`
  height: 20px;
  width: 20px;
  fill: orangered;
  margin-right: 15px;
`;

const IngredientCount = styled.p`
  padding-right: 15px;
`;

const IngredientText = styled.p``;

export default function(props) {
  const ingredient = props.ingredient.split(" ");

  return (
    <Ingredient>
      <IngredientIcon>
        <use href={`${icons}#verified`} />
      </IngredientIcon>
      <IngredientCount>{ingredient[0]}</IngredientCount>
      <IngredientText>{ingredient.slice(1).join(" ")}</IngredientText>
    </Ingredient>
  );
}
