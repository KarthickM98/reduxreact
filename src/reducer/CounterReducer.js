
const initialState = 0;


// const [name,setName] =useState({})  like the intilise the state  here state

const handleMyCounter = (state = initialState, action) => {
  switch (action.type) {
      case "INCREMENT_COUNT":  // case 'must be same' form the action file
          return state + 1;
      case "DECREMENT":
          return state - 1;
      default:
          return state;
  }
};
export default handleMyCounter;