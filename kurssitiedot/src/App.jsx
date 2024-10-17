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
  console.log(props.parts)
  const [first, second, third] = props.parts
  console.log(first)
  console.log(second)
  console.log(third)
  return (
  <div>
    <Part part={first.name} ex={first.exercises}/>
    <Part part={second.name} ex={second.exercises}/>
    <Part part={third.name} ex={third.exercises}/>
  </div>
  )
}

const Total = (props) => {
  console.log(props.ex)
  const [first, second, third] = props.ex
  console.log(first)
  console.log(second)
  console.log(third)
  return (
  <div>
    <p>Number of exercises {first.exercises + second.exercises + third.exercises}</p>
  </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name}/>
      <Content parts={course.parts}/>
      <Total ex={course.parts}/>
    </div>
  )
}

export default App
