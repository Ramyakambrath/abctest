import { GET_ACCOUNT_SALES, GET_ACCOUNT_COST,GET_ACCOUNT_INVENTORY, ACCOUNT_LOADING} from './types'
import axios from 'axios'
import {returnErrors} from './errorActions'
import {returnMessages} from './msgActions'




export const getAccountSales=()=>dispatch=>{
    dispatch(setAccountLoading())
    axios.get('/api/account/Sales')
    .then((res)=>{
        
        dispatch({
            type:GET_ACCOUNT_SALES,
            payload:res.data
        })
    })

  
}


export const getAccountCost=(type)=>dispatch=>{
    dispatch(setAccountLoading())
    axios.get('/api/account/Cost')
    .then((res)=>{
        
        dispatch({
            type:GET_ACCOUNT_COST,
            payload:res.data
        })
    })

  
}


export const getAccountInventory=(type)=>dispatch=>{
    dispatch(setAccountLoading())
    axios.get('/api/account/Inventory')
    .then((res)=>{
        
        dispatch({
            type:GET_ACCOUNT_INVENTORY,
            payload:res.data
        })
    })

  
}



   
export const setAccountLoading=()=>{
    return {
        type:ACCOUNT_LOADING
    }
}