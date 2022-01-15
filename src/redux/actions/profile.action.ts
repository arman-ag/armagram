import { profileData } from "./../../assets"
const getAllProfile=()=>{
return{type:"ALL_PROFILE",data:profileData}
}

const getSingleProfile=(phoneNum:string)=>{
const singleProfile=profileData.find((item=>item.phone===phoneNum))
    return {type:"SINGLE_PROFILE",data:singleProfile}
}

export const profileAction={
    getAllProfile,
    getSingleProfile
}