import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from './state'
import { State } from './state/reducers/index'
//import reducers from './state/reducers'

function App() {
  const dispatch = useDispatch()

  const { depositMoney, withdrawMoney, bankrupt } = bindActionCreators(
    actionCreators,
    dispatch,
  )
  const amount = useSelector((state: State) => state.bank)

  return (
    <div className="App">
      <h2>{amount}</h2>
      <button onClick={() => depositMoney(100)}>Deposit</button>
      <button onClick={() => withdrawMoney(100)}>Withdraw</button>
      <button onClick={() => bankrupt()}>bankrupt</button>
    </div>
  )
}

export default App
