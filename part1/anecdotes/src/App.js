import { useState } from 'react'
const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]
  const handleVoteClick = () =>{
    const ary = votes.length === 0 ? new Uint8Array(anecdotes.length) :[...votes]
    ary[selected]+=1
    let temp = maxIndex;
    for(var i =0; i<votes.length;++i){
      if(ary[i] > ary[maxIndex]){
        temp = i;
      }
    }
    console.log('max',votes[temp]);
    setIndex(temp);
    setVotes(ary)
  }
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState([])
  const[maxIndex,setIndex] = useState(0)

  return (
    <div>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]?votes[selected]:0 } votes</p>
      <Button handleClick={handleVoteClick} text="vote" />
      <Button handleClick={() => setSelected(Math.floor(Math.random() * (anecdotes.length-1)))} text="next anecdote" />
      <p>Anecdote with most votes</p>
      <p>{anecdotes[maxIndex]}</p>
      <p>has {votes[maxIndex]?votes[maxIndex]:0} votes</p>
    </div>
  )
}

export default App