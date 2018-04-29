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
  const kurssi = 'Half Stack -sovelluskehitys'
  const osa1 = {
    nimi: 'Reactin perusteet',
    tehtavia: 10
  }
  const osa2 = {
    nimi: 'Tiedonvälitys propseilla',
    tehtavia: 7
  }
  const osa3 = {
    nimi: 'Komponenttien tila',
    tehtavia: 14
  }

  return (
    <div>
        <Otsikko kurssi={kurssi}/>
        <Sisalto tehtavia1={osa1.tehtavia} tehtavia2={osa2.tehtavia} tehtavia3={osa3.tehtavia} 
        osa1={osa1.nimi} osa2={osa2.nimi} osa3={osa3.nimi}/>
        <Yhteensa tehtavia1={osa1.tehtavia} tehtavia2={osa2.tehtavia} tehtavia3={osa3.tehtavia}/>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)