import { dataMessage } from "./../../assets"
const getMessage=(phoneNum:string)=>{
    const{[phoneNum]:data}:any=dataMessage
    console.log(data)
    return{type:phoneNum,data}
}


export const messageAction={
    getMessage
}