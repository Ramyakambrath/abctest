import { GET_VENDOR,VENDOR_LOADING} from './types'
import axios from 'axios'




export const getVendors=()=>dispatch=>{
    dispatch(setVendorLoading())
    axios.get('/api/vendor')
    .then((res)=>{
        
        dispatch({
            type:GET_VENDOR,
            payload:res.data
        })
    })

  
}



   
export const setVendorLoading=()=>{
    return {
        type:VENDOR_LOADING
    }
}