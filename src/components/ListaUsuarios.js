
import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

const ListaUsuariosContainer = styled.div`
      display:flex;
      align-items:center;
      justify-content:center;
`

const ListaItem = styled.div`
 

     
`

const Item = styled.div`
     margin-top:30px;
    display:grid;
    grid-template-columns: auto auto ;
    column-gap: 30px;
    align-items: center;
    justify-items: center;
   
`

const Titulo = styled.div`
   display:flex;
   justify-content:center;
   font-weight:bold;
   font-size:24px;
`

const BotaoDeleteUsuario = styled.button`
      background-color: red;
      color: white;
`

export class ListaUsuarios extends React.Component {

  state = {
    listaUsuarios : []
  }

  componentDidMount = () =>{
     this.pegarUsuariosCadastrados()
  }

  pegarUsuariosCadastrados = ()=>{
     axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', {
        headers: {
          Authorization: "laecio-conceicao-muyembe"
        }
      }).then((resposta) =>{
           this.setState({listaUsuarios: resposta.data}) 
           
      }).catch((erro)=>{
           alert("Não foi possível realizar consulta")
      })
      
      

      
  }

  deletarUsuario = (idUsuario) =>{

       axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${idUsuario}`, {
         headers:{
             Authorization: "laecio-conceicao-muyembe"
         }
       }).then((resposta) =>{
           alert("Usuário deletado com sucesso")
           this.pegarUsuariosCadastrados()
       })
       .catch((erro)=>{
           alert("Não foi possível deletar esse usuário")
       })
           
  }

  render(){

     const usuariosMostrados = this.state.listaUsuarios.map((usuario)=>{
        return <Item key={usuario.id}>{usuario.name} <BotaoDeleteUsuario onClick={()=> this.deletarUsuario(usuario.id)}>Deletar</BotaoDeleteUsuario></Item>
    }) 

    

    return (
      <div >
          <Titulo>Usuários Cadastrados</Titulo>
          <ListaUsuariosContainer>

             <ListaItem> {usuariosMostrados}</ListaItem>
          </ListaUsuariosContainer>
      </div>
    );
  }
}

export default ListaUsuarios;
