import { FETCH_ISSUES } from "../constants/constants"

const initState={
    gitIssues:null
}

export const rootReducer=(state=initState,action)=>{
    switch(action.type){
        case FETCH_ISSUES:{
            return Object.assign({},state,{
                gitIssues:action.payload,
          
              })
        }
        default:
            return state
    }
}