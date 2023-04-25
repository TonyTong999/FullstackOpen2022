import Part from './Part'
import Total from './Total'
const Content = ({parts}) =>{
    
    console.log(parts[0])
    return(
     <div>
        {parts.map(part => 
        <Part  key = {part.id} name = {part.name} exercises = {part.exercises}/>
        )}
        <Total parts ={parts}/>
     </div>
      
        
    )
  }

  export default Content