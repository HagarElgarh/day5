import { data } from "jquery"

const baseURL = "http://localhost:3003/student"
export const getCars = async (email) => {
    let payload;
    try{
        let response = await fetch(`${baseURL}?Email=${email}`)
        payload = await response.json()
        console.log(payload)
    }
    catch(err){
        console.log(err)
    }
    return {
        type: 'STUDENT_LIST',
        payload
    }
}




export const getCarDetails = async (id) => {
    let payload;
    try{
        let response = await fetch(`${baseURL}/${id}`)
        payload = await response.json()
        console.log(payload)
    }
    catch(err){
        console.log(err)
    }
    return {
        type: 'CAR_DETAILS',
        payload
    }

}

export const clearCarDetails = ()=>{
    return {
        type:'CLEAR_CAR_DETAILS',
        payload:null
    }
}


