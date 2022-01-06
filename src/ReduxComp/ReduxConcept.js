//redux component
import React from 'react'
import { increaseCounter,decCounter } from '../Actions/CounterAction';
import { useDispatch,useSelector } from 'react-redux';  //dispatch used to take action as args with reducers // selector select data from store

const ReduxConcept = () => {
    const myState = useSelector ( (state)=>state.handleMyCounter)   // we get handleMyCounter form store Global obj  // arrow function as callback
    //selects the reducer function check // usestate here like
    const dispatch = useDispatch();// check which action needed so inc or dec?  // hooks

    return (
        <div>
            
            <div className="jumbotron">
                <h1 className="display-4">Our Couter App</h1><div>   hi saksham</div>
                <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                <hr className="my-4"/>
                    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                    <p className="lead">
                        <a className="btn btn-primary btn-lg" onClick={()=>dispatch(decCounter())} role="button">Minus</a>
                        <input type='text' value={myState}/>
                        <a className="btn btn-success btn-lg" onClick={()=>dispatch(increaseCounter())} role="button">Plus </a>   {/*dispatch({type:'increase'})  actions inside dispatch*/}
                    </p>
            </div>
        </div>
    )
}

export default ReduxConcept








// 1. ACTION : 


// export const addStudent = (data) => {

//     return {
//         type: 'ADD_STUDENT',
//         payload: data
//     }
// }
// export const deleteStudent = (data) => {

//     return {
//         type: 'DELETE_STUDENT',
//         payload: data
//     }
// }

// 2. REDUCER :

// const studentStuff = ( state, action ) => {
//     switch (action.type) {
//         case "ADD_STUDENT" :
//             return state + action.payload          // adding student

//         case "DELETE_STUDENT" :
//             return state - action.payload          // delete student
        
//         default: return state
//     }
// }


// rootReducer :
// const rootReducer = combineReducers( {
//     studentStuff,
//     parentStuff
//  } )



// 3. STORE :
// import { createStore } from 'redux'

// const store = createStore(rootReducer)



// //

// <Provider store={store}>  in the parent component  like app.js
//     <App/ >
// </Provider>


