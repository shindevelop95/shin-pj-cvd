import { BlockRounded } from '@material-ui/icons';
import styled from 'styled-components/macro'

export const Container = styled.div`
   width:100%;
   margin-left:40px;

   @media (max-width: 768px) {
    display:flex;
    flex-direction:column;
    margin:auto;
    margin-bottom:10px;
    width:80%;
  }
`;

export const Content = styled.div`
    display:flex;
    position:relative;
    align-items:center;
    justify-content:center;
     > img{
        margin-right:10px;
        width:50px;
        height:50px;
    }
    background-color:${({total}) => (total ? "#300B02": "#858584") };
    border:${({total}) => (total ? "2px solid white": "none") };
    border-radius:30px;
    padding:10px;
    transition:0.4s;
    &:hover{
        background-color:${({total}) => (total ? "black": "none") };
        border:${({total}) => (total ? "2px solid yellow": "none") };
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
    font-size:12px;
    line-height:0.5;
    font-weight:900;
    color:#eee;
`;
    

export const Group = styled.div`
    cursor: ${({total}) => (total ? 'pointer' : 'default')};
    max-width:150px;
    min-width:150px;
`;