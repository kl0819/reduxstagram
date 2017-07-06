// The action (info about what happened)
// copy the current state 

function posts(state = [], action) {
  console.log('The post will change');
  console.log(state, action);
  return state; 
}

export default posts;