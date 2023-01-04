import { useState } from 'react'
const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)
const StatisticLine = (props) => {
 const{stat,text,percent} = props;
 
 return(
  <tr>
  <td>{text}</td> 
  <td>{stat} {percent}</td>
  </tr>
 )
}

const Statistics = (props) => {
   const{good,neutral,bad} = props;
   const all = bad+good+neutral;
   const average = (-1*bad+good)/all;
   const positive = 100*good/all;
  return(
      all === 0? 
      <div>
      <h1>statistics</h1>
      <p>no feedback given</p>
      </div>
      :
      <div>
      <StatisticLine stat={good} text = 'good'/>
      <StatisticLine stat={neutral} text = 'neutral'/>
      <StatisticLine stat={bad} text = 'bad'/>
      <StatisticLine stat={all} text = 'all'/>
      <StatisticLine stat={average} text = 'average'/>
      <StatisticLine stat={positive} text = 'positive' percent = '%'/>
       </div>
      
  )
  
}
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setGood(good+1)} text="good" />
      <Button handleClick={() => setNeutral(neutral+1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />
       <Statistics good = {good} bad ={bad} neutral = {neutral}/>
    </div>
  )
}

export default App