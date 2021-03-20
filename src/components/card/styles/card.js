import { BlockRounded } from '@material-ui/icons';
import styled from 'styled-components/macro'

export const Container = styled.div`
   
`;

export const Content = styled.div`
    display:flex;
    align-items:center;

     > img{
        margin-right:10px;
        width:50px;
        height:50px;
    }
`;

export const Title = styled.h2`
    font-size:1rem;
    line-height:0.5
`;

export const Cases = styled.p`
    line-height:0.5;
`;

export const Total = styled.p`
    line-height:0.5;
    font-weight:900;
    >span{
        color:red;
    }
`;
    

export const Group = styled.div`
    max-width:150px;
    min-width:150px;
`;