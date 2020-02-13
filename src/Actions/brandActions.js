import { GET_BRAND, UPDATE_BRAND,ADD_BRAND,DELETE_BRAND,BRAND_LOADING,DELETE_SUCCESS,DELETE_ERROR,UPDATE_SUCCESS,UPDATE_ERROR,ADD_SUCCESS,ADD_ERROR} from './types'
import axios from 'axios'
import {returnErrors} from './errorActions'
import {returnMessages} from './msgActions'




export const getBrands=()=>dispatch=>{
    dispatch(setBrandLoading())
    axios.get('/api/brand')
    .then((res)=>{
        
        dispatch({
            type:GET_BRAND,
            payload:res.data
        })
    })

  
}


export const deleteBrand=(id)=>(dispatch,getState)=>{

    axios.delete(`/api/brand/${id}`)
    .then((res)=>{
        
        dispatch({
            type:DELETE_BRAND,
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

export const updateBrand=(updateBrand,id)=>dispatch=>{
    dispatch(setBrandLoading())
    axios.put(`/api/brand/${id}`,updateBrand)
    .then((res)=>{
        
        dispatch({
            type:UPDATE_BRAND,
            payload:res.data
        })
        dispatch(returnMessages(res.data.msg,res.status,'UPDATE_SUCCESS'))
        dispatch({type:UPDATE_SUCCESS})
        
    })
    .catch(err =>{
        console.log('error',err)
        dispatch(returnErrors(err.response.data.msg,err.response.status,'UPDATE_FAIL'))
        dispatch({type:UPDATE_ERROR})
    })
       
   }
   


export const addBrand=(brand)=>dispatch=>{
    axios.post('/api/brand',brand)
    .then((res)=>{
       
        dispatch({
            type:ADD_BRAND,
            payload:res.data
        })
        dispatch(returnMessages(res.data.msg,res.status,'ADD_SUCCESS'))
        dispatch({type:ADD_SUCCESS})

    }).catch(err =>{
        
        dispatch(returnErrors(err.response.data.msg,err.response.status,'ADD_FAIL'))
        dispatch({type:ADD_ERROR})
    })
    
       
   }
   
export const setBrandLoading=()=>{
    return {
        type:BRAND_LOADING
    }
}