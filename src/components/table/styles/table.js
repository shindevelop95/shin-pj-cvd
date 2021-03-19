import styled from 'styled-components'

export const Container =styled.div`
    margin-top:20px;
    overflow:scroll;
    height:400px;
    color:#6a5d5d;
`;
export const Column = styled.tr`
    display:flex;
    justify-content:space-between;

    &:nth-of-type(odd){
        background-color:#f3f2f8;
    }
`;
export const Row = styled.td`
    padding:0.5rem;
`;