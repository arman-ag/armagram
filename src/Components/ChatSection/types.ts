export interface messagesType{
    type:string
    message:string
    replyMessage?:string
}
export interface messageText{
    text:string
}
export interface allMessageType extends messagesType{
    allMessages:{ }[]
}