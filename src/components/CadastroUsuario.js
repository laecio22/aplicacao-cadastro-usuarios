import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

    const FormularioContainer = styled.div `
           border:1px solid #000;
           width:300px;
           height: 200px;
           display:flex;
           align-items:center;
           flex-direction: column;
           justify-content:center;

           div {
               margin-bottom:20px;
           }

           button {
               background-color: blue;
               color: white;
               width:70px;
               height:30px;
           }

           

    `
export class CadastroUsuario extends React.Component {

  state ={
    inputNomeUsuario : "",
    inputEmailUsuario : ""
  }

  onChangeNomeUsuario = (event)=>{
       this.setState({inputNomeUsuario:event.target.value})
  }

  onChangeEmailUsuario = (event)=>{
    this.setState({inputEmailUsuario:event.target.value})
  }

  criarUsuario = (nome, email ) => {
     const body = {
       name: nome,
       email: email
     }

     axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', body, {
       headers: {
          Authorization: "laecio-conceicao-muyembe"
       }
     }).then((resposta) => {
        alert("USUÁRIO CADASTRADO COM SUCESSO")
        this.setState({
          inputNomeUsuario: "",
          inputEmailUsuario:""       
      })
        
        
     }).catch((erro) =>{
      alert("NÃO FOI POSSÍVEL REALIZAR O CADASTRO")
     
       
    })
     

     
  }


  render(){

    return (
      <div>

          <FormularioContainer>

            
                <div>
                        <label>Nome:</label>
                        <input type="text" placeholder="Informe seu nome" value={this.state.inputNomeUsuario} onChange={this.onChangeNomeUsuario}/>
                </div>
                <div>

                        <label>Email:</label>
                        <input type="email" placeholder="Informe seu email" value={this.state.inputEmailUsuario} onChange={this.onChangeEmailUsuario}/>
                </div>

                <button onClick={() => this.criarUsuario(this.state.inputNomeUsuario, this.state.inputEmailUsuario)}>Salvar</button>

            

          </FormularioContainer>
      </div>
    );
  }
}

export default CadastroUsuario;
