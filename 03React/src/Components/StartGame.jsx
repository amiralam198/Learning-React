import styled from 'styled-components';

const StartGame = ({toggle}) => {
    return <Container>
        <div>
        <img src='/images/dices.png' alt='dice image'/>
        </div>
        <div className='content'>
            <h1>Dice Game</h1>
            <Button onClick={toggle}>Play Now</Button>
        </div>
    </Container>;
  
};

export default StartGame;

const Container = styled.div`
    max-width:1180px;
    display:flex;
    margin: 0 auto;
    align-items:center;
    height:100vh;
    .content h1{
        font-size:96px;
        white-space:nowrap; // it not make the h1 into "tukda"

    }
`;
const Button = styled.button`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
color:white;
background:black;
border-radius:5px;
padding:10px 18px;cd
gap:10px;
width:220px;
height:44px;
font-size:16px;
border: 1px solid transparent;
cursor: pointer;
transition:0.4s background ease-in;

&:hover{   // styling hover 
    background-color:white;
    color:black;
    border: 1px solid black;
    cursor: pointer;
    transition:0.4s background ease-in; 
}
`;
