import { useState } from 'react'

const Button = (props) => {
  console.log(props)
  return (
    <div>
      <button onClick={props.funkt}>{props.text}</button>
    </div>
  )
}

const Titl = (props) => {
  console.log(props)
  return (
    <div>
      <h1>{props.text}</h1>
    </div>
  )
}

const Winner = (props) => {
  console.log(props.anecdotes)
  console.log(props.points)
  let val = -1
  const indxs = [0, 1, 2, 3, 4, 5, 6, 7]
  let sel = -1
  indxs.forEach(value => {
    if (props.points[value] > val) {
      val = props.points[value]
      sel = value
    }
  })
  return (
    <div>
      <p>{props.anecdotes[sel]}</p>
      <p>has {props.points[sel]} votes</p>
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState([0, 0, 0, 0, 0, 0, 0, 0])

  const randSelect = () => {
    const newSelected = Math.floor(Math.random() * anecdotes.length)
    console.log(newSelected)
    setSelected(newSelected)
  }
  const voteByOne = () => {
    const newPoints = [...points]
    newPoints[selected] += 1
    console.log(newPoints)
    console.log(selected)
    setPoints(newPoints)
  }

  return (
    <div>
      <Titl text="Anecdote of the day"/>
      <p>{anecdotes[selected]}</p>
      <p>has {points[selected]} votes</p>
      <Button funkt={voteByOne} text="vote"/>
      <Button funkt={randSelect} text="next anecdote"/>
      <Titl text="Anecdote with most votes"/>
      <Winner anecdotes={anecdotes} points={points}/>
    </div>
  )
}

export default App