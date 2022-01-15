const initialState={
    profile:[]
}
const profile=(state=initialState,action:any)=>{
    switch(action.type){
        case "ALL_PROFILE":
            return{
                ...state,
                profile:action.data
            };
            case "SINGLE_PROFILE":
                 console.log(action,"action")
            return{
                ...state,
                profile:action.data
            }
            default:
                return state
    }
}
export default profile