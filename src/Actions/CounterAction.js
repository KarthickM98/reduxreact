
export const increaseCounter =()=>{     ///name export // seprate fun for each action
    return{
        type :"INCREMENT_COUNT"  // this type mut be same in switch cases in reducer
    }
}

 export const decCounter=()=>{
    return{
        type :"DECREMENT"
    }
}

// export const addStudent =(data)=>{
//     return{
//         type:"ADSTU",
//         payload:data;\
//     }
// }