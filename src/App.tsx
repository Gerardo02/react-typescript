import './App.css'
import { Card } from 'antd'
import { useNavigate } from 'react-router-dom'

function App() {

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


      </Card>
    </>
  )
}

export default App
