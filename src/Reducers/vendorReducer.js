import { GET_VENDOR,VENDOR_LOADING} from '../Actions/types'


const initialState={
    vendorList:[],
    loading: false,
   
    
}

export default function(state=initialState,action){

    switch(action.type){
        case GET_VENDOR:
            return {...state,
            vendorList:action.payload,
            loading: false}
        
  

        case VENDOR_LOADING:
              return {...state,
            loading:true}
        default:return state;
    }
}