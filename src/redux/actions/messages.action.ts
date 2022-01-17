

const sendMessage=(phoneNum:string,message:any)=>{
 
    return{type:phoneNum,message}
}






export const senMessageAction={
    sendMessage,
    
}