import styled from 'styled-components'
import { Link } from 'react-router-dom';

export const Title = styled.h1`
      text-align:center;
      font-family:sans-serif;
      font-size:2rem;
      color:#f2f2f2;
`

export const List = styled.ul`
  list-style:none;
  padding:0;
  font-family:sans-serif;
 

`
export const ListItem = styled.li`
  margin:1.5rem 0;
  background:#7a007a;
  color:#fff;
  padding:1.5rem;
  text-align:center;
  justify-content:center;
  align-itens:center;
`

export const container = styled.div`
  width:100%;
  max-width:991px;
  margin: 0 auto 75px;
  flex-direction:row;
  flex-wrap:wrap;
  align-itens:center;
  justify-content:center;

`
export const LinkHome = styled(Link)`
display:block;
width:4rem;
margin: 2rem auto;
text-align:center;
padding: .5rem 0;
background: #7a007a;
color:#ffff;
text-decoration:none;

`