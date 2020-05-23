import styled from 'styled-components';

export const Container = styled.div`
  width:100vw;
  height:100vh;
  display:flex;
  flex-direction:column;
  
  

`

export const Title = styled.h1`
     
      text-align:center;
      font-family:sans-serif;
      font-size:2rem;
      color:#f2f2f2;
      
      padding:0;
`

export const Input = styled.input`

border:1px solid #ddd;
height:2.5rem;
padding:0 .9rem;
border-radius: .25rem 0 0 .25rem;

&:focus,
&:active{
  outline:none;
  box-shadow:none;
} 

`

export const Button = styled.button`
  
  height: 2.7rem;
  border:1px solid #000;
  background: #7a007a;
  color:#fff;
  font-weight:bold;
  font-size:20px;
  border-radius:0 .25rem .25rem 0;

  &:focus,
  &:active{
  outline:none;
  box-shadow:none;
} 

`

export const ErrorMsg = styled.span`
display:block;
font-size: 17px;
color:red;


`

export const Content = styled.div`
    display:grid;
    grid-template-columns: 1fr;
    width:50%;
    align-itens:center;
    justify-content:center;
    position:relative;
    left:300px;
    @media (max-width: 700px) {
      left:0px;
    }

    



`