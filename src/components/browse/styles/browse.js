import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: space-evenly;
    padding: 20px;
    height:100vh;
    padding:0;
    background-color:#2C1A02 ;
    @media (max-width: 768px) {
    flex-direction: column;
    height:100%;
  }

`;

export const Left = styled.div`
    flex-basis:100%;
    padding:20px;

    @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Right = styled.div`
    background-color:black;
    margin-left:20px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  justify-content: space-between;

  @media (max-width: 768px) {
    
    display:flex;
    flex-direction:column;
    margin-bottom:10px;
    justify-content:center;
}
`;

export const SubHeader = styled.h3`
    color:white;
`;