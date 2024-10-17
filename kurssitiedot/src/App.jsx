const Header = (props) => {
  console.log(props.course)
  return (
  <div>
    <h1>{props.course}</h1>
  </div>
  )
}

const Part = (props) => {
  console.log(props.part)
  console.log(props.ex)
  return (
  <div>
    <p>{props.part} {props.ex}</p>
  </div>
  )
}

const Content = (props) => {
  console.log(props.list)
  return (
  <div>
    <Part part={props.list[0]} ex={props.list[1]}/>
    <Part part={props.list[2]} ex={props.list[3]}/>
    <Part part={props.list[4]} ex={props.list[5]}/>
  </div>
  )
}

const Total = (props) => {
  console.log(props.ex1)
  console.log(props.ex2)
  console.log(props.ex3)
  return (
  <div>
    <p>Number of exercises {props.ex1 + props.ex2 + props.ex3}</p>
  </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course = {course}/>
      <Content list={[part1, exercises1, part2, exercises2, part3, exercises3]}/>
      <Total ex1={exercises1} ex2={exercises2} ex3={exercises3}/>
    </div>
  )
}

export default App
