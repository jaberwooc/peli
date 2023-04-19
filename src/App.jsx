import { Component, useState } from "react";
import reactLogo from "./assets/react.svg";
import React from "react";
import "./index.css";
import Tablapeli from "./Components/Tablapeli";
import Tablarentas from "./Components/Tablarentas";

class App extends Component {
  constructor() {
    super();
    this.state = {
      Peliculas: [
        {
          codigo: 1,
          nombre: "Halloween Kills",
          idioma: "SUB",
          precio: 18.5,
          stock: 20,
        },
        { codigo: 2, nombre: "M3gan", idioma: "ESP", precio: 28.5, stock: 10 },
        { codigo: 3, nombre: "Babylon", idioma: "ESP", precio: 35.0, stock: 5 },
        {
          codigo: 4,
          nombre: "La ballena",
          idioma: "ESP",
          precio: 38.5,
          stock: 8,
        },
        {
          codigo: 5,
          nombre: "Llaman a la puerta",
          idioma: "SUB",
          precio: 18.5,
          stock: 23,
        },
        {
          codigo: 6,
          nombre: "Ant-Man y la Avispa: Quantumania",
          idioma: "ESP",
          precio: 18.5,
          stock: 10,
        },
        {
          codigo: 7,
          nombre: "Creed III",
          idioma: "ESP",
          precio: 35.0,
          stock: 9,
        },
        {
          codigo: 8,
          nombre: "Scream 6",
          idioma: "ESP",
          precio: 38.5,
          stock: 3,
        },
      ],
      Rentadas: [ {
        codigo: 7,
        nombre: "Creed III",
        idioma: "ESP",
        precio: 35.0,
        stock: 9,
      }],
      total: 0,
    };
  }
Enviar=(P)=>{
  const temp = this.state.Rentadas.filter(a=>a.codigo===P.codigo)
  const temp3 = this.state.Peliculas.filter(a=>a.codigo!=P.codigo)

  console.log(this.state.Rentadas)
  if(temp==0)
  {
    console.log('1')
    this.setState({
      ...this.state,
      Rentadas : [...this.state.Rentadas,{...P, stock:P.stock-1}],
      Peliculas : [{...P, stock:P.stock-1},...temp3],

    })

  }
  else{
    const temp2 = this.state.Rentadas.filter(a=>a.codigo!=P.codigo)
    console.log('2')
    this.setState({
      ...this.state,
      
     Rentadas : [{...P, stock:P.stock-1},...temp2],
     Peliculas : [{...P, stock:P.stock-1},...temp3],


    })
  }

}

Eliminar=(Codigo)=>{
  Rentas

  this.setState({



  })


}
  render() {
    return (
      <>
    
      <div className="f">
        <Tablapeli Enviar={this.Enviar} Peliculas={this.state.Peliculas}/>
        <Tablarentas Rentas={this.state.Rentadas}/>
      </div>
      </>

    )
  }
}

export default App;
