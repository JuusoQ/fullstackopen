import React from 'react'
import ReactDOM from 'react-dom'

const Otsikko = (props) => (
        <div>
            <h1>{props.kurssi}</h1>
        </div>
)

const Sisalto = (props) => (
        <span>
        <p>{props.osa1} {props.tehtavia1}</p>
        <p>{props.osa2} {props.tehtavia2}</p>
        <p>{props.osa3} {props.tehtavia3}</p>
        </span>
)

const Osa = (props) => (

)

const Yhteensa = (props) => (
       <p> Yhteensä {props.tehtavia1+ props.tehtavia2 + props.tehtavia3} tehtävää</p>
)


const App = () => {
  const tehtavia1 = 10
  const tehtavia2 = 7
  const tehtavia3 = 14
  const osa1 = "Reactin perusteet"
  const osa2 = "Tiedonvälitys propseilla"
  const osa3 = "Komponenttien tila"

  return (
    <div>
        <Otsikko kurssi="Half Stack -sovelluskehitys"/>
        <Sisalto tehtavia1={tehtavia1} tehtavia2={tehtavia2} tehtavia3={tehtavia3} 
        osa1={osa1} osa2={osa2} osa3={osa3}/>
        <Yhteensa tehtavia1={tehtavia1} tehtavia2={tehtavia2} tehtavia3={tehtavia3}/>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)