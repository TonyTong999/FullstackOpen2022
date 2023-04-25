const Total = ({parts})=>{
    console.log(parts)
    const total = parts.reduce((prev,cur)=>{
        console.log('what is happening', prev, cur.exercises)
        return prev+cur.exercises
    },0)
    return(
        <p>Number of exercises {total}</p>
    )
  }
  export default Total