import { ADD_TODO } from '../actions/todos'
import { ADD_GOAL } from '../actions/goals'

const checker = (store) => (next) => (action) => 
{
    if (action.type === ADD_TODO && action.todo.name.toLowerCase().includes('bitcoin'))
     {
      return alert("Nope. That's a bad idea.")
     }//end if 
  
    if (action.type === ADD_GOAL && action.goal.name.toLowerCase().includes('bitcoin'))
     {
      return alert("Nope. That's a bad idea.")
     }//end if 
  
    return next(action)
  }//end checker 
  
  export default checker 