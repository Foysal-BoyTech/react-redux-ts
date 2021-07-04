import './App.css'
import axios from 'axios'
import React, { useState, useEffect } from 'react'

function App() {
  const [user, setUser] = useState([])

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((res) => setUser(res.data))
    //.catch((err) => console.log(err, 'arrrrr'))
  }, [])
  const checkfn = () => {
    let userArr = user.map((user) => user.address.city.split(''))

    let newArr = []

    userArr.map((el) => {
      if (el[0] === 'S') {
        return newArr.push(el.join(''))
      }
    })
    return newArr
  }

  const cityArr = checkfn()

  return (
    <div className="App">
      <div>
        {user.map((el) => (
          <h1 key={el.id}>
            {el.address.city !== 'Gwenborough' ? (
              <p>{el.address.city}</p>
            ) : null}
          </h1>
        ))}
      </div>
      <button
        onClick={() => checkfn()}
        className={user.length ? 'btn' : 'btn1'}
      >
        Add me
      </button>
      <div>
        {cityArr.length
          ? cityArr.map((el, index) => <p key={index}>{el}</p>)
          : null}{' '}
      </div>
    </div>
  )
}

export default App
