import { GET_MANUFACTURER, UPDATE_MANUFACTURER,ADD_MANUFACTURER,DELETE_MANUFACTURER,MANUFACTURER_LOADING,DELETE_SUCCESS,DELETE_ERROR,UPDATE_SUCCESS,UPDATE_ERROR,ADD_SUCCESS,ADD_ERROR} from '../Actions/types'
import axios from 'axios'
import {returnErrors} from './errorActions'
import {returnMessages} from './msgActions'




export const getManufacturers=()=>dispatch=>{
    dispatch(setManufacturerLoading())
    axios.get('/api/manufacturer')
    .then((res)=>{
        
        dispatch({
            type:GET_MANUFACTURER,
            payload:res.data
        })
    })

  
}
// export const editItem=(id,mode)=>dispatch=>{
//     dispatch(setItemsLoading())
//     axios.get(`/api/customerLists/${id}/${mode}`)
//     .then((res)=>{
//         dispatch({
//             type:EDIT_ITEM,
//             payload:res.data
//         })
//     })

  
// }

export const deleteManufacturer=(id)=>(dispatch,getState)=>{

    axios.delete(`/api/manufacturer/${id}`)
    .then((res)=>{
        
        dispatch({
            type:DELETE_MANUFACTURER,
            payload:res.data
        })
        dispatch(returnMessages(res.data.msg,res.status,'DELETE_SUCCESS'))
        dispatch({type:DELETE_SUCCESS})
    })
    .catch(err =>{  
           
        dispatch(returnErrors(err.response.data.msg,err.response.status,'DELETE_FAIL'))
        dispatch({type:DELETE_ERROR})
    })
 
    
}

export const updateManufacturer=(updateManufacturer,id)=>dispatch=>{
    dispatch(setManufacturerLoading())
    axios.put(`/api/manufacturer/${id}`,updateManufacturer)
    .then((res)=>{
        
        dispatch({
            type:UPDATE_MANUFACTURER,
            payload:res.data
        })
        dispatch(returnMessages(res.data.msg,res.status,'UPDATE_SUCCESS'))
        dispatch({type:UPDATE_SUCCESS})
        
    })
    .catch(err =>{
        dispatch(returnErrors(err.response.data.msg,err.response.status,'UPDATE_FAIL'))
        dispatch({type:UPDATE_ERROR})
    })
       
   }
   


export const addManufacturer=(manufacturer)=>dispatch=>{
    axios.post('/api/manufacturer',manufacturer)
    .then((res)=>{
       
        dispatch({
            type:ADD_MANUFACTURER,
            payload:res.data
        })
        dispatch(returnMessages(res.data.msg,res.status,'ADD_SUCCESS'))
        dispatch({type:ADD_SUCCESS})

    }).catch(err =>{
        
        dispatch(returnErrors(err.response.data.msg,err.response.status,'ADD_FAIL'))
        dispatch({type:ADD_ERROR})
    })
    
       
   }
   
export const setManufacturerLoading=()=>{
    return {
        type:MANUFACTURER_LOADING
    }
}