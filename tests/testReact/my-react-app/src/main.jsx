import React from "react"
import { createRoot } from 'react-dom/client'

import Boat from './Boat.jsx'

let myForm=
//uso <> come contenitore per metterc dentro più elementi html senza però aggiungere un nodo nel DOM
//inoltre se voglio aggiungere l'attributo html class devo usare className(perché class è una keyword JS)
<> 
  <table>
    <tr>
      <th>Name</th>
    </tr>
    <tr>
      Mazzo
    </tr>
    <tr>
      Matte
    </tr>
  </table>
  {/*Questo è un commento multilinea.
    se voglio aggiungere l'attributo html class devo usare className(perché class è una keyword JS)  */}
  <p className='myClass'>This is a paragraph</p>
</>
  
const foo=()=>alert("hai comprato la macchina")


const stile={
  color: "red",
  fontSize: "50px",
  backgroundColor: "yellow"
}

const x=6

//questa "function Car" è un componente
function Car(args){
  let auto="Ford Focus"
  return (
    <>
    <h2>My {args.color} Car</h2>
    <p>My car is a {auto} </p>
    <p>It has run {x<5 ? -999 : 151456*1000} metri</p>
    <button onClick={foo} disabled={false}>COMPRA</button>
    <br></br>{/*Tutti i tag devono essere chiusi sempre, anche <br>*/}
    <button disabled={true}>DISABLED</button>
    
    </>
  )
}
//anche questa è una componente
function Garage(){
  return (
    <>
      <p style={stile}>Che auto possiedo?</p>
      <Car color="gray"/>
      <Car color="white"/>
      <Boat/>
    </>
  )
}



//questa è una componente a classe:
/*Le componenti a classi hanno questo ciclo di vita: Mounting -> Updating -> and Unmounting.
- Mounting è costituito da: constructor(), getDerivedStateFromProps(), render(), Component DidMount(), dove solo render() è obbligatorio.
- Updating è fatto da: getDerivedStateFromProps(), shouldComponentUpdate(), render(), getSnapshotBeforeUpdate(), componentDidUpdate()
*/

class Bike extends React.Component{
  constructor(props){
    super(props) //permette al componente di ereditare metodi dal suo parent, ossia React.Component

    //l'oggetto "state" della classe è il posto dove memorizziamo i valori delle proprietà del componente
    //esso può contenere anche più coppie key-value e va inizializzato nel costruttotre
    this.state={color: "blu"}
  }

  changePrimaryCol = () => this.setState({color: "nera"})
  changeSecondaryCol = () => this.setState({secondCol: "verde"})

  
  static getDerivedStateFromProps(props, state){
    //questo metodo viene chiamato subito prima a render() e serve a impostare lo state interno del modulo dati i props esterni
    return {secondCol: props.color}
  }

  componentDidMount(){
    //si invoca questo metodo dopo il render  
    //è dove si eseguono gli statement che necessitano di un elemento già nel DOM(quello appena renderizzato)
    setTimeout(()=>{this.setState({color: "rosa"})}, 3000)
  }

  shouldComponentUpdate(){
    //questo metodo serve per dire a React se deve o meno continuare con il rendering, di default:=true
    //se lo metto a falso il rendering in pratica si blocca
    return true
  }

  getSnapshotBeforeUpdate(){
    //in questo metodo posso accedere ai props e allo state prima dell'update
    //se si usa questo metodo è necessario aver definito anche componentDidUpdate()
    this.valBeforeUpdate=document.getElementById("myId").innerHTML
  }

  componentDidUpdate(){
    //questo metodo ti permette di fare operazioni subito dopo l'update, ad esempio stampare a schermo com'era il doc prima dell'aggiornamento
    document.getElementById("div1").innerHTML="C'è stato l'update, il testo prima era"+ this.valBeforeUpdate
  }

  render(){
    return (
      <>
        <h2>Sono una bici {this.state.color} e {this.state.secondCol}</h2>
        <p>Sono una {this.props.tipologia}</p>
        <button onClick={this.changePrimaryCol}>Cambia 1° colore</button>
        <button onClick={this.changeSecondaryCol}>Cambia 2° colore </button> 
        {/*Questo non funzionerà mai perché nella fase di updating si fa sempre getDerivedStateFromProps() che mi ricambia il colore a di props*/}

      </>
    )  
  }

}

createRoot(document.getElementById('myId')).render(
  // myForm
  // <Garage/>
  <Bike color="gialla" tipologia="graziella"/>
)
