const open=()=>{
    return{type:"OPEN",openStatus:true}
}
const close=()=>{
    return {type:"CLOSE",openStatus:false}
}
export const modalAction={
    close,
    open
}