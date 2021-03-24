import styled from 'styled-components/macro'

export const Container = styled.div`
        height:600px;
        background-color:white;
        padding:1rem;
        border-radius:30px;
        margin-top:16px;
        box-shadow: 0 0 8px -4px rgba(0,0,0,0.5);

        @media (max-width: 768px) {
                height:400px;
                margin-top:30px;
  }

`;