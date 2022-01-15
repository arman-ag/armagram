const initialState={
    openStatus:false
}
const isOpen = (state = initialState,action:any)=>{
    switch(action.type){
        case "OPEN":
            return{
                ...state,
                openStatus:action.openStatus
            }
            case "CLOSE":
                return{
...state,
openStatus:action.openStatus
                }
                default:
                    return state
    }
}
export default isOpen