import styled from 'styled-components/macro'

export const Container = styled.div`
    @media (max-width: 768px) {
        
    }
`;
export const Group = styled.div`
    display:flex;
    align-items:center;
    margin-bottom:20px;
    justify-content:space-between;

    @media (max-width: 768px) {
    padding:10px;
}

    
`;
export const Title = styled.h1`
    color:#FFF7F7;
    font-size:30px;
    font-weight:bold;
    font-family:'Train One', cursive;

    @media (max-width: 768px) {
        font-size:20px;
}
`;

export const SubTitle = styled.h3`
    color:#18E0BF;
    line-height:0.7;
    font-size:24px;
    font-family:'Train One', cursive;
    @media (max-width: 768px) {
        font-size:14px;
}
`

export const SubGroup = styled.div`
`