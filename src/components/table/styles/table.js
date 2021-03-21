import styled from 'styled-components'

export const Container =styled.div`
    margin-top:20px;
    overflow:scroll;
    height:400px;
    color:#6a5d5d;
   
  overflow-x: hidden;
  ::-webkit-scrollbar {
    display: none;
}

    margin-bottom:40px;
`;
export const Column = styled.tr`
    display:flex;
    justify-content:space-between;
    color:white;
    

 
`;
export const Row = styled.td`
    padding:0.5rem;
    > img{
        border-radius:50%;
        height:30px;
        width:30px
    }
`;