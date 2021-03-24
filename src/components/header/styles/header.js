import styled from 'styled-components/macro'

export const Container = styled.div`
`;
export const Group = styled.div`
    display:flex;
    align-items:center;
    margin-bottom:20px;
    justify-content:space-between;

    @media (max-width: 768px) {
    
    display:block;
    padding:10px;
}

    
`;
export const Title = styled.div`
    color:#FFF7F7;
    font-size:30px;
    font-weight:bold;
`;

export const SubTitle = styled.h3`
    color:#18E0BF;
    line-height:0.7
`

export const SubGroup = styled.div`
    @media (max-width: 768px) {
        min-height:900px;        
}
`