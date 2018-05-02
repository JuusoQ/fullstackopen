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
  const kurssi = {
    nimi: 'Half Stack -sovelluskehitys',
    osat: [
      {
        nimi: 'Reactin perusteet',
        tehtavia: 10
      },
      {
        nimi: 'Tiedonvälitys propseilla',
        tehtavia: 7
      },
      {
        nimi: 'Komponenttien tila',
        tehtavia: 14
      }
    ]
  }

  return (
    <div>
        <Otsikko kurssi={kurssi.nimi}/>
        <Sisalto tehtavia1={kurssi.osat[0].tehtavia} tehtavia2={kurssi.osat[1].tehtavia} tehtavia3={kurssi.osat[2].tehtavia} 
        osa1={kurssi.osat[0].nimi} osa2={kurssi.osat[1].nimi} osa3={kurssi.osat[2].nimi}/>
        <Yhteensa tehtavia1={kurssi.osat[0].tehtavia} tehtavia2={kurssi.osat[1].tehtavia} tehtavia3={kurssi.osat[2].tehtavia}/>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)