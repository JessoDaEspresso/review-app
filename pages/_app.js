import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useState, createContext } from 'react'

export const ScoreContext = createContext()
export const SetScoreContext = createContext()

export default function App({ Component, pageProps }) {
  const [count, setCount] = useState(0)
  const [score, setScore] = useState(0)
  return (
    <>
      {/* Context Syntax */}
      <ScoreContext.Provider value={score}>
        <SetScoreContext.Provider value={setScore}>
          {/* passing the states as props is the prop drilling */}
          <Component {...pageProps} count={count} setCount={setCount} />
        </SetScoreContext.Provider>
      </ScoreContext.Provider>
    </>
  )
}
