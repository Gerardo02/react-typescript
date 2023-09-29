import './App.css'
import { Card } from 'antd'
import { useNavigate } from 'react-router-dom'
import useLocalStorage from './hooks/useLocalStorage'
import { useState } from 'react'

function App() {

  const [name, setName] = useLocalStorage('name', '')
  const [count, setCount] = useLocalStorage('counter', 0)

  const [counter, setCounter] = useState(0)

  const navigate = useNavigate()
  


  const gridStyle: React.CSSProperties = {
    width: '50%',
    textAlign: 'center',
    cursor: 'pointer'
  };

  return (
    <>
      <Card title="Routes" style={{ width: 500 }}>

        <Card.Grid style={gridStyle} onClick={() => navigate('/modal')}>Modal</Card.Grid>
        <Card.Grid style={gridStyle} onClick={() => navigate('/task')}>Task</Card.Grid>
        <Card.Grid style={gridStyle} onClick={() => navigate('/characters')}>Characters</Card.Grid>
        <Card.Grid style={gridStyle} onClick={() => navigate('/todos')}>Todos</Card.Grid>


      </Card>

      <button onClick={() => setCount(count + 1)}>{count}</button>
      <button onClick={() => setCounter(counter + 1)}>{counter}</button>
      <button onClick={() => setName('Pedro Juarez')}>Nombres</button>
      <ul>
        <li>{name}</li>
      </ul>
      
    </>
  )
}

export default App
