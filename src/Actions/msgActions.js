
import { GET_MSGS, CLEAR_MSGS} from './types'

export const returnMessages=(msg,status,id=null)=>{

    return {
        type:GET_MSGS,
        payload:{ msg, status ,id}
    }

}

export const clearMessages=()=>{

    return{
        type:CLEAR_MSGS
      
    }

}