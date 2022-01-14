export interface message{
   [key:string]:{
    type:string,
    message:string,
    replyMessage?:string
}[]
}