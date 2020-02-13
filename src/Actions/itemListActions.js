import { GET_ITEM, UPDATE_ITEM,ADD_ITEM,DELETE_ITEM,ITEM_LOADING,DELETE_SUCCESS,DELETE_ERROR,UPDATE_SUCCESS,UPDATE_ERROR,ADD_SUCCESS,ADD_ERROR} from '../Actions/types'
import axios from 'axios'
import {returnErrors} from './errorActions'
import {returnMessages} from './msgActions'




export const getItems=()=>dispatch=>{
    dispatch(setItemLoading())
    axios.get('/api/item')
    .then((res)=>{
        
        dispatch({
            type:GET_ITEM,
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

export const deleteItem=(id)=>(dispatch,getState)=>{

    axios.delete(`/api/item/${id}`)
    .then((res)=>{
        
        dispatch({
            type:DELETE_ITEM,
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

export const updateItem=(updateItem,id)=>dispatch=>{
    dispatch(setItemLoading())
    axios.put(`/api/item/${id}`,updateItem)
    .then((res)=>{
        
        dispatch({
            type:UPDATE_ITEM,
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
   


export const addItem=(item)=>dispatch=>{
    axios.post('/api/item',item)
    .then((res)=>{
       
        dispatch({
            type:ADD_ITEM,
            payload:res.data
        })
        dispatch(returnMessages(res.data.msg,res.status,'ADD_SUCCESS'))
        dispatch({type:ADD_SUCCESS})

    }).catch(err =>{
        
        dispatch(returnErrors(err.response.data.msg,err.response.status,'ADD_FAIL'))
        dispatch({type:ADD_ERROR})
    })
    
       
   }
   
export const setItemLoading=()=>{
    return {
        type:ITEM_LOADING
    }
}