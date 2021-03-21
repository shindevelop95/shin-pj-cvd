import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: space-evenly;
    padding: 20px;
    height:100vh;
    background-color:#2C1A02 ;
    @media (max-width: 990px) {
        flex-direction: column;
    }

`;

export const Left = styled.div`
    flex-basis:100%;
`;

export const Right = styled.div`
    background-color:black;
    margin-left:20px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  justify-content: space-between
`;

export const SubHeader = styled.h3`
    color:white;
`;