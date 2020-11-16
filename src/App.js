import React, { Component } from 'react';
import logo1 from './logo1.jpg';
import './App.css';
class App extends Component {

  constructor(propiedades){
    super(propiedades);
    this.state = {
        numero1: 0,
        numero2: 0,
        total: 0,
        total1:0
    } 
  }
  render() {
    const {total} = this.state;
    return (
        <div id="app">       
         <img src ={logo1}></img>
          <h1>OPERACIONES MÁTEMATICAS</h1>
             
                 <p>Valor 1: 
                 <input type="number"  name="numero1" onChange={this.handleChange} placeholder=" Ingrese Número 1 " /></p>
                 <p>Valor 2: 
                 <input type="number" name="numero2" onChange={this.handleChange}placeholder=" Ingrese Número 2 "/></p>
            <div>
            <button onClick={this.Sumar}>Sumar</button>
            <button onClick={this.Restar}>Restar</button>
            <button onClick={this.Multiplicar}>Multiplicar</button>
            </div>
            <div>
            <button onClick={this.Dividir}>Dividir</button>
            <button onClick={this.Residuo}>Residuo</button>
            <button onClick={this.Potencia}>Potencia</button>
            </div>
            <div>
            <button onClick={this.Raiz}>Raiz</button>
            <button onClick={this.Permutacion}>Permutacion</button>
            <button onClick={this.Combinacion}>Combinacion</button>
            </div>

          <p><strong>
            
            <div>{"El resultado es = " + total}</div>
            </strong>
          </p>
        </div>
    );
}

handleChange = (e) =>{
    const {name, value} = e.target;
    this.setState({
        [name]: value
    })
}

Sumar = () => {
    const{numero1, numero2} = this.state;
    this.setState({
        total: (parseInt(numero1)+parseInt(numero2))
    })
}
Restar = () => {
  const{numero1, numero2} = this.state;
  this.setState({
      total: (parseInt(numero1)-parseInt(numero2))
  })

}
Multiplicar = () => {
  const{numero1, numero2} = this.state;
  this.setState({
      total: (parseInt(numero1)*parseInt(numero2))
  })
}
Dividir = () => {
  const{numero1, numero2} = this.state;
  this.setState({
      total: (parseInt(numero1)/parseInt(numero2))
  })
}
Residuo= () => {
  const{numero1, numero2} = this.state;
  this.setState({
      total: (parseInt(numero1)%parseInt(numero2))
  })
}
  Potencia = () => {
    const{numero1, numero2} = this.state;
    this.setState({
        total: Math.pow(parseInt(numero1),parseInt(numero2))
    })
}
Raiz = () => {
  const{numero1, numero2} = this.state;
  this.setState({
      total: Math.sqrt(parseInt(numero1))
  })
}
Permutacion = () => {
  const{numero1, numero2} = this.state;
  let r=1;
  let s=1;
  let resta;
  for (let i = numero1; i > 0; i--) {
    r *=i;
  }
  resta = parseInt(numero1)-parseInt(numero2);
  for (let j = resta; j > 0; j--) {
    s *=j;
  }
  this.setState({ 
     total: (parseInt(r)/parseInt(s))
  })
}

Combinacion = () => {
  const{numero1, numero2} = this.state;
  let r=1;
  let s=1;
  let t=1;
  let resta;
  for (let i = numero1; i > 0; i--) {
    r *=i;
  }
  resta = parseInt(numero1)-parseInt(numero2);
  for (let j = resta; j > 0; j--) {
    s *=j;
  }
  for (let k = numero2; k > 0; k--) {
    t *=k;
  }

  this.setState({
      total: (parseInt(r)/(parseInt(s)*parseInt(t)))
  })
}
}
export default App;
