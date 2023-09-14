
import './App.css'
import Header from './components/Header/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <h1 className=' text-4xl'>Knowladge Cafe</h1>
      <Header></Header>
    </>
  )
}

export default App
