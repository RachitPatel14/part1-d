import { useState } from 'react'
const Button = ({handleClick, text}) => {
  return (
    <>
      <button onClick={handleClick}>{text}</button>
    </>
  )
}
const StatisticLine = ({text, value}) => {
  if(text==='positive'){
    return (
      <table>
      <tbody>
      <tr>
        <td>{text} {value} %</td>
      </tr>
      </tbody>
    </table>
    )
  }
  return (
    <table>
      <tbody>
      <tr>
        <td>{text} {value}</td>
      </tr>
      </tbody>
    </table>
  )
}
const Statistics = ({ good, neutral, bad, totalAvg, positiveAvg, all }) => {
  if(all === 0 ) {
    return(
      <div>
        <p>No feedback given</p>
      </div>
    )
  }
  return (
  <div>
    <StatisticLine text='good' value={good} />
    <StatisticLine text='neutral' value={neutral} />
    <StatisticLine text='bad' value={bad} />
    <StatisticLine text='all' value={all} />
    <StatisticLine text='average' value={totalAvg} />
    <StatisticLine text='positive' value={positiveAvg} />
  </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [average, setAverage] = useState(0)
  const handleGoodClick = () => 
  {
    setAll(all+1)
    setAverage(average+1)
    setGood(good+1)}
  const handleBadClick = () => 
  {
    setAverage(average-1)
    setAll(all+1)
    setBad(bad+1)}
  const handleNeutralClick = () => {
    setAverage(average+0)
    setAll(all+1)
    setNeutral(neutral+1)}
  const totalAvg = average/all
  const positiveAvg = good/all*100

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleGoodClick} text='good' /> 
      <Button handleClick={handleNeutralClick} text='neutral' />
      <Button handleClick={handleBadClick} text='bad' />
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} totalAvg={totalAvg} positiveAvg={positiveAvg} all={all} />
    </div>
  )
}

export default App