import React,{ useEffect , useState } from  'react';
import * as S from './styled';
import './styling.css';
import { useHistory } from 'react-router-dom'



export default function Repositories(){

  const history = useHistory();

  const [repositories, setRepositories ] = useState([]);
  
  let repositoriesName = localStorage.getItem('repositoriesName');



  useEffect(() => {
    if(repositoriesName !== null){
      repositoriesName = JSON.parse(repositoriesName);
      setRepositories(repositoriesName);
    }else{
      history.push('/');
    }
    
  }, [])

  return (
    <S.container>
      <S.Title>Repositórios</S.Title>
      <S.List>
        {repositories.map(repository => {
          return (
            <S.ListItem>{ repository }</S.ListItem>
          )
        })}
       </S.List>
       <S.LinkHome to="/">Voltar</S.LinkHome>
    </S.container>
  )
}