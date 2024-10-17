import { useState } from 'react'

const Titl = (props) => {
  console.log(props)
  return (
    <div>
      <h1>{props.text}</h1>
    </div>
  )
}

const StatisticLine = (props) => {
  console.log(props)
  return (
    <tbody>
      <tr>
        <td>{props.text}</td>
        <td>{props.value}</td>
      </tr>
    </tbody>
  )
}

const Statistics = (props) => {
  console.log(props)
  const all = props.good+props.bad+props.neutral
  if (all === 0) {
    return (
        <div>
          <p>No feedback given</p>
        </div>
      )
    }
  const avg = (props.good-props.bad)/all
  const perc = (props.good/all)*100
  const pos = perc.toString()+" %"
  return (
    <div>
      <table>
        <StatisticLine text="good" value={props.good}/>
        <StatisticLine text="neutral" value={props.neutral}/>
        <StatisticLine text="bad" value={props.bad}/>
        <StatisticLine text="all" value={all}/>
        <StatisticLine text="average" value={avg}/>
        <StatisticLine text="positive" value={pos}/>
      </table>
    </div>
  )
}

const Button = (props) => {
  console.log(props)
  return (
    <div>
      <button onClick={props.funkt}>{props.text}</button>
    </div>
  )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  // <Button/>
  const badByOne = () => {
    const newBad = bad+1
    setBad(newBad) 
  }
  const goodByOne = () => {
    const newGood = good+1
    setGood(newGood) 
  }
  const neutralByOne = () => {
    const newNeutral = neutral+1
    setNeutral(newNeutral) 
  }
  return (
    <div>
      <Titl text="give feedback"/>
      <Button funkt={goodByOne} text="good"/>
      <Button funkt={neutralByOne} text="neutral"/>
      <Button funkt={badByOne} text="bad"/>
      <Titl text="statistics"/>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App