import React from 'react'
import styled from 'styled-components';
import CadastroUsuario from './components/CadastroUsuario'
import ListaUsuarios from './components/ListaUsuarios'

const ContainerFormularioCadastro =  styled.div `
     display:flex;
     align-items: center;
     justify-content:center;
`

export class App extends React.Component {
  
  state = {
    telaInicial : true
  }

  mudarPagina = ()=>{
     this.setState({telaInicial:!this.state.telaInicial})
  }

  render(){

    return (
      <div>
         <button onClick={this.mudarPagina}>{this.state.telaInicial?"Ir para página de lista": "Ir para página de registro"}</button>

         {this.state.telaInicial?<ContainerFormularioCadastro><CadastroUsuario/></ContainerFormularioCadastro>:<ListaUsuarios/>}
              
         
         
        
      </div>
    );
  }
}

export default App;
