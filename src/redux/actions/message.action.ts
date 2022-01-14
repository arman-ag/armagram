import { dataMessage } from "./../../assets";
import { message } from "./types";
const getMessage=(phoneNum:string)=>{
    const{[phoneNum]:data}:message=dataMessage
console.log(data)
    return{type:phoneNum,data}
}


export const messageAction={
    getMessage
}