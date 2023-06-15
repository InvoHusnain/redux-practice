import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, setInputValue, setParagraph } from './store/counterSlice'
import './App.css'

function App() {
  const storedInputValue = localStorage.getItem('InputValue');
  const {count, inputValue, paragraph} = useSelector((state)=> state?.counter);
  const dispatch = useDispatch();

  const handleInputChange = (e) =>{
    dispatch(setInputValue(e.target.value))
  }

  const handleButtonClick = () =>{
    localStorage.setItem("InputValue", inputValue)
    dispatch(setParagraph(inputValue))
    dispatch(setInputValue(""))
  }
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div className='para-wrapper'><h1>{paragraph ? paragraph : storedInputValue}</h1></div>
      <div className="card">
        <div className='input-wrapper'>
          <input type="text" onChange={handleInputChange} value={inputValue} />
          <button onClick={handleButtonClick}>Set Value</button>
        </div>
        <div className='counter-wrapper'>
          <button onClick={()=> dispatch(increment())}>Plus</button>
        <button>
          count is {count}
        </button>
        <button disabled={count < 1 ? true : false} onClick={()=> dispatch(decrement())}>Minus</button>
        </div>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
