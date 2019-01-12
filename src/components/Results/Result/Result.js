import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import actions from "./../../../store/actions";

function result(props) {
  const { publisher, title, recipe_id, image_url } = props;

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
      background-image: url(${image_url});
      background-size: cover;
      background-position: center;
    }
  `;

  const Recipe = styled.div`
    flex: 1;
    padding-left: 18px;

    .recipe--title {
      color: #9e2a2a;
      text-transform: uppercase;
      font-size: 16px;
      margin-bottom: 8px;
    }

    .recipe--source {
      text-transform: uppercase;
      font-size: 12px;
    }
  `;

  return (
    <Result
      onClick={() => {
        props.getRecipe(recipe_id);
      }}
    >
      <div className="imgFrame" />
      <Recipe>
        <h3 className="recipe--title">{title}</h3>
        <p className="recipe--source">{publisher}</p>
      </Recipe>
    </Result>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    getRecipe: recipe_id => {
      dispatch(actions.getRecipe(recipe_id));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(result);
