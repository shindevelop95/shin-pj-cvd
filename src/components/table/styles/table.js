import styled from 'styled-components'

export const Container =styled.div`
    margin-top:30px;
    overflow:scroll;
    height:400px;
    color:#6a5d5d;
   
  overflow-x: hidden;
  ::-webkit-scrollbar{
      margin-left:10px;
  }
  ::-webkit-scrollbar-thumb {
    background-color:red;
    border-radius:10px;
    cursor:pointer;
}

::-webkit-scrollbar-thumb:hover{
    opacity:0.5;
}
  ::-webkit-scrollbar{
      box-shadow:inset 0 0 5px grey;
      border-radius:10px;
  }

    margin-bottom:40px;
`;
export const Column = styled.tr`
    display:flex;
    justify-content:space-between;
    color:white;
    margin-right:10px;
    
`;
export const Row = styled.td`
    padding:0.5rem;
    > img{
        border-radius:50%;
        height:30px;
        width:30px
    }
`;