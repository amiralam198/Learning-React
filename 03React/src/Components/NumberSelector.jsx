import { useState } from 'react';
import styled from 'styled-components';
const NumberSelector = () => {
    const arrNumber = [1,2,3,4,5,6];
    const [selectNumber,setSelectNumber] = useState();
  return (
    <div>
        {arrNumber.map((value,i)=>
        <Box 
        isSelected = {value==selectNumber}
        key={i} 
        onClick={()=>setSelectNumber(value)}
        >
            {value}
            </Box>)}
    </div>
  );
};

export default NumberSelector;

const Box = styled.div`
height:72px;
width:72px;
border: 1px solid black;
display:grid;
place-items:center;
font-size:24px;
font-width:700;
background-color: ${(props) => (props.isSelected ? "black" : "white")};
color: ${(props) => (!props.isSelected ? "black" : "white")};

`;