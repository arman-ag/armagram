const initialState={
    display:"none"
}
const replyStatus = (state = initialState,action:any)=>{
    switch(action.type){
        case "OPEN":
            return{
                ...state,
                display:action.open,
                replyText:action.text
            }
            case "CLOSE":

                return{
...state,
 display:action.open
                }
                default:
                    return state
    }
}
export default replyStatus