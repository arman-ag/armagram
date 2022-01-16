const open=()=>{
    return{type:"OPEN",open:"flex"}
}
const close=()=>{
    return {type:"CLOSE",open:"none"}
}
export const replyAction={
    close,
    open
}