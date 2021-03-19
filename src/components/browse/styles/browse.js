import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: space-evenly;
    padding: 20px;

    @media (max-width: 990px) {
        flex-direction: column;
    }

`;

export const Left = styled.div`
    flex: 0.9;
`;

export const Right = styled.div`
  
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  justify-content: space-between
`;

export const SubHeader = styled.h3``;