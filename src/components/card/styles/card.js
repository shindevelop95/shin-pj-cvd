import { BlockRounded } from '@material-ui/icons';
import styled from 'styled-components/macro'

export const Container = styled.div`
   width:100%;
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
    color:#FFF7F7;
    font-size:14px;
    line-height:0.5
`;

export const Cases = styled.p`
    font-size:16px;
    line-height:0.5;
    color:#FCE029;
    font-weight:bold;

    span{
        color:${({recovered}) => (recovered === true ? '#5FB14A' : '#F70909')};
    }
`;

export const Total = styled.p`
    font-size:10px;
    line-height:0.5;
    font-weight:900;
    color:#707070;

`;
    

export const Group = styled.div`
    cursor: ${({total}) => (total ? 'pointer' : 'default')};
    max-width:150px;
    min-width:150px;
`;