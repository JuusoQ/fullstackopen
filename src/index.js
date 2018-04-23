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


const Yhteensa = (props) => (
       <p> Yhteensä {props.tehtavia1+ props.tehtavia2 + props.tehtavia3} tehtävää</p>
)


const App = () => {

  return (
    <div>
        <Otsikko kurssi="Half Stack -sovelluskehitys"/>
        <Sisalto tehtavia1={10} tehtavia2={7} tehtavia3={14} osa1="Reactin perusteet" osa2="Tiedonvälitys propseilla" osa3="Komponenttien tila"/>
        <Yhteensa tehtavia1={10} tehtavia2={7} tehtavia3={14}/>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)