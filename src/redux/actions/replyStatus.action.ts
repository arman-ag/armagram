const open=(text:string)=>{
    return{type:"OPEN",open:"flex",text}
}
const close=()=>{
    return {type:"CLOSE",open:"none"}
}
export const replyAction={
    close,
    open
}