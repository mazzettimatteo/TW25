
import { createRoot } from 'react-dom/client'
import './index.css'
import Car from './Car.jsx'


let x=["diesel", "petrol"]
let proprietario="Matteo"

function Garage({colore="bianco",dimensioni}){
  return (<>
    <h2>Cosa c'è nel garage {colore} da {dimensioni} mq di {proprietario}</h2>
    <Car brand="Tata" kms={150000} fuel={x[1]}/>
  
  </>)
}

function Casa(props){
  const {famiglia, citta}=props
  return (<>
    <h1>Questa è la casa dei {famiglia} che si trova a {citta}</h1>
    <Garage indirizzo="via belluzzi" dimensioni={20}/>
  </>)
}




function Son(props){
  return(<>
    <h2>Son</h2>
    <div style={{color: "red"}}>{props.children}</div>  
  </>)//props.children permette di comporre i componenti: tutto ciò che verra messo dentro fra i tag <Son> e </Son> è un props.childern
}

function Daughter(props){
  return(<div style={{background: "lightblue"}}>
    <h2>Daughter</h2>
    <div>{props.children}</div>
  </div>)
}

function Parent(){

  const greet=(a)=>{
    alert(`Hello ${a}!`)
  }

  return(<>
    <h1>My two children</h1>
    <Son>
      <p>This text was written in Parent but is displayed as part of the Son component.</p>
    </Son>
    <Daughter>
      <p>This text was written in Parent but is displayed as part of the Daughter component.</p>
    </Daughter>

    <button onClick={()=>{greet("everyone")}}></button>
  </>)
}

function MissedGoal(){
  return <h1>MISSED!</h1>
}

function MadeGoal() {
  return <h1>Goal!</h1>
}

function Goal(props){
  const isGoal=props.isGoal
  if(isGoal){
    return <MadeGoal/>
  }
  else{
    return <MissedGoal/>
  }
  //oppure return <>{isGoal ? <MadeGoal/> : <MissedGoal/> }</>
}

function Sport(props){
  x=<Goal isGoal={true}></Goal>
  return(<>
    {props.flag && <div>{x}</div>} 
  </>) //se props.flag==true allora stampo x(che corrisponde a <Goal/>)
}


function MyBoats(){
  const boats=["Laser","Europa","470","FD", "Finn"]
  const equipe=[
    {id:1089, name:"Arthur" },
    {id: 1042, name:"Thomas"},
    {id: 1077, name: "John"}
  ]
  return(<>
    <h1>My Boats:</h1>
    <ul>
      {boats.map((b)=><li>I own a {b}</li>)}
    </ul>
    <h1>My Equipe</h1>
    <ul>
      {equipe.map((p)=><li key={p.id}>I am {p.name}</li>)}
    </ul>
  </>)
}



createRoot(document.getElementById('root')).render(
  
  //<Car brand="Tata" kms={150000} fuel={x[1]}/>
  //<Garage indirizzo="via belluzzi" dimensioni={20}/>
  //<Casa famiglia="Mazzetti" citta="Bologna"/>
  //<Parent></Parent> //notiamo che scrivere <Parent/> o <Parent></Parent> è analogo
  //<Goal isGoal={true}></Goal>
  //<Sport flag={false}/>
  <MyBoats></MyBoats>
)
