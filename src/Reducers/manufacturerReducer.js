import { GET_MANUFACTURER,EDIT_MANUFACTURER, UPDATE_MANUFACTURER,ADD_MANUFACTURER,DELETE_MANUFACTURER,MANUFACTURER_LOADING,DELETE_SUCCESS,DELETE_ERROR,UPDATE_SUCCESS,UPDATE_ERROR,ADD_SUCCESS,ADD_ERROR} from '../Actions/types'


const initialState={
    manufacturerList:[],
    manufacturerListdb:[],
    loading: false,
    isOperationSuccess:false,
    totalRecords:''
}

export default function(state=initialState,action){

    switch(action.type){
        case GET_MANUFACTURER:
            return {...state,
            manufacturerList:action.payload.map(d=>d.name),
            manufacturerListdb:action.payload,
            loading: false,
            totalRecords:action.payload.length}

        // case EDIT_ITEM:
        //     return {...state,
        //     items:action.payload,
        //     loading: false}

        case DELETE_MANUFACTURER:
          
              return {...state,
            manufacturerListdb:state.manufacturerListdb.filter((item)=>item._id !==action.payload.deletedManufacturer._id),
            manufacturerList:state.manufacturerListdb.map(item =>item.name),
          }
       
        case DELETE_SUCCESS:
              return {...state,
                isOperationSuccess:true
            }
        case DELETE_ERROR:
              return {...state,
                isOperationSuccess:false
            }
        
        
        case UPDATE_MANUFACTURER:
         
            const updatedManufacturer=action.payload.updatedManufacturer
                return {...state,
                  manufacturerListdb: state.manufacturerListdb.map(item => item._id === updatedManufacturer._id ? updatedManufacturer : item),
                  manufacturerList:state.manufacturerListdb.map(item =>item.name),
                  loading: false,
                }
        
        case UPDATE_SUCCESS:
                return {...state,
                  isOperationSuccess:true
              }
        case UPDATE_ERROR:
                return {...state,
                  isOperationSuccess:false
              }

        case ADD_MANUFACTURER:
           
              return {...state,
                manufacturerList:[action.payload.manufacturer.name,...state.manufacturerList],
                manufacturerListdb:[action.payload.manufacturer,...state.manufacturerListdb]}

        case ADD_SUCCESS:
                return {...state,
                  isOperationSuccess:true
              }
        case ADD_ERROR:
                return {...state,
                  isOperationSuccess:false
              }

        case MANUFACTURER_LOADING:
              return {...state,
            loading:true}
        default:return state;
    }
}