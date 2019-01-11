import React from "react";
import styled from "styled-components";

import icons from "./../../../../assets/icons.svg";

const Ingredient = styled.li`
  display: flex;
  float: left;
  width: 50%;
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
  return (
    <Ingredient>
      <IngredientIcon>
        <use href={`${icons}#verified`} />
      </IngredientIcon>
      <IngredientCount>1000</IngredientCount>
      <IngredientText>can of tomatoes, whole or crushed</IngredientText>
    </Ingredient>
  );
}
