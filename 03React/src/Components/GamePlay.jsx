import { styled } from "styled-components";
import NumberSelector from "./NumberSelector";
import TotalScore from "./TotalScore";
import RoleDice from "./RoleDice"
import { useState } from "react";
const GamePlay = () => {
  return (
    <MainContainer>
      <div className="top_section">
        <TotalScore/>
        <NumberSelector/>
      </div>
      <RoleDice/>
    </MainContainer>
  );
};

export default GamePlay;

const MainContainer = styled.main`
padding-top:70px;
.top_section{
  display:flex;
  justify-content:space-around;
  align-items:end;
}
`;