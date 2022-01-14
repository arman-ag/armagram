import { dataMessage } from "./../../assets";
import { message } from "./types";

const getMessage=(phoneNum:string)=>{
    const{[phoneNum]:data}:message=dataMessage
    return{type:phoneNum,data}
}

const sendMessage=(phoneNum:string,message:any)=>{
        
 return{type:phoneNum,data:message}
}
export const messageAction={
    getMessage,
    sendMessage
}