import { dataMessage } from "./../../assets";
import { message } from "./types";

const getMessage=(phoneNum:string,mounted:boolean)=>{
    const{[phoneNum]:data}:message=dataMessage
    return{type:phoneNum,data,mounted}
}

const sendMessage=(phoneNum:string,message:any,mounted:boolean)=>{
        
 return{type:phoneNum,data:message,mounted}
}




export const messageAction={
    getMessage,
    sendMessage
}