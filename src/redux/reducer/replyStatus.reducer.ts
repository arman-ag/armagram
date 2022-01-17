const initialState={
    display:"none",
    replyText:""
}
const replyStatus = (state = initialState,action:any)=>{
    switch(action?.type){
        case "OPEN_REPLAY":
            return{
                ...state,
                display:action?.openReply,
                replyText:action?.text
            }
            case "CLOSE_REPLAY":


                return{
...state,
 display:action?.openReply
                }
                default:
                    return {...state}
    }
}
export default replyStatus