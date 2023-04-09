import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';


const card1 = [
  {image:"../image/kumpulan.png", tittlecard:"pelayanan cepat", isicard:"kadkakdsadkasdkaskasdkasdkasdk" }
]

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    
  <Button as="a" variant="primary">
    Button as link
  </Button>
  <Button as="a" variant="success">
    Button as link
  </Button>

    </div>
      //   <div className="judul">
      //   <div>
      //     <h2> Pemrograman React</h2>
      //     <h5>Alasan Menggunakan React</h5>
      //     <p> 1. Fleksible </p>
      //     <p> 2. Handal </p>
      //     <p> 3. Mempunyai Komunitas Yang Besar </p>
      //     <p> 4. Dukungan penuh dari Facebook </p>

      //   </div>
      // </div>
  )
}

export default App
