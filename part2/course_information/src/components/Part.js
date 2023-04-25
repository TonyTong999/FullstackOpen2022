const Part = (props)=>{
   console.log(props.exercises)
    return(
      <p>
      {props.name} {props.exercises}
      </p>
    )
  }

  export default Part