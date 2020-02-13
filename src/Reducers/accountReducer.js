import { GET_ACCOUNT_SALES, GET_ACCOUNT_COST,GET_ACCOUNT_INVENTORY,ACCOUNT_LOADING} from '../Actions/types'


const initialState={
    accountListSales:[],
    accountListCost:[],
    accountListInventory:[],
    loading: false,
   
    
}

export default function(state=initialState,action){

    switch(action.type){
        case GET_ACCOUNT_SALES:
            return {...state,
            accountListSales:action.payload,
            loading: false}
        case GET_ACCOUNT_COST:
            return {...state,
            accountListCost:action.payload,
            loading: false}
        case GET_ACCOUNT_INVENTORY:
            return {...state,
            accountListInventory:action.payload,
            loading: false}
  

        case ACCOUNT_LOADING:
              return {...state,
            loading:true}
        default:return state;
    }
}