import React from "react";
import { Alink } from "./styled";
import { useNavigate } from "react-router";
import ArrowBack from './img/left-arrow.svg'

const PersonLinkBack = () => {
  const goBack = useNavigate();
  return (
    <Alink href="#" onClick={() => goBack(-1)}>
      <img src= {ArrowBack} alt="Go back" />
      <span>GO BACK</span>
    </Alink>
  );
};

export default PersonLinkBack;
