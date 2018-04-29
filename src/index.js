import React from 'react'
import ReactDOM from 'react-dom'

const Otsikko = (props) => (
        <div>
            <h1>{props.kurssi}</h1>
        </div>
)

const Sisalto = (props) => (
        <div>
        <Osa osa={props.osa1} tehtavia={props.tehtavia1}/>
        <Osa osa={props.osa2} tehtavia={props.tehtavia2}/>
        <Osa osa={props.osa3} tehtavia={props.tehtavia3}/>

        </div>
)

const Osa = (props) => (
      <p>{props.osa} {props.tehtavia}</p>
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