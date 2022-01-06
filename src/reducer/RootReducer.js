 import handleMyCounter from "./CounterReducer";   // 2or more reducer if import then
 import {combineReducers } from 'redux'


 const rootReducer = combineReducers({
     handleMyCounter
    //  handkeMyCounter2
 })
 export default rootReducer