import { GET_ITEM, UPDATE_ITEM,ADD_ITEM,DELETE_ITEM,ITEM_LOADING,DELETE_SUCCESS,DELETE_ERROR,UPDATE_SUCCESS,UPDATE_ERROR,ADD_SUCCESS,ADD_ERROR} from '../Actions/types'


const initialState={
    itemList:[],
    itemListdb:[],
    loading: false,
    isOperationSuccess:false,
    totalRecords:''
}

export default function(state=initialState,action){

    switch(action.type){
        case GET_ITEM:
            return {...state,
            itemList:action.payload.map(d=>d.name),
            itemListdb:action.payload,
            loading: false,
            totalRecords:action.payload.length}

        // case EDIT_ITEM:
        //     return {...state,
        //     items:action.payload,
        //     loading: false}

        case DELETE_ITEM:
          
              return {...state,
            itemListdb:state.itemListdb.filter((item)=>item._id !==action.payload.deletedItem._id),
            itemList:state.itemListdb.map(item =>item.name),
          }
       
        case DELETE_SUCCESS:
              return {...state,
                isOperationSuccess:true
            }
        case DELETE_ERROR:
              return {...state,
                isOperationSuccess:false
            }
        
        
        case UPDATE_ITEM:
         
            const updatedItem=action.payload.updatedItem
                return {...state,
                    itemListdb: state.itemListdb.map(item => item._id === updatedItem._id ? updatedItem : item),
                    itemList:state.itemListdb.map(item =>item.name),
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

        case ADD_ITEM:
           
              return {...state,
                itemList:[action.payload.item.name,...state.itemList],
                itemListdb:[action.payload.item,...state.itemListdb]}

        case ADD_SUCCESS:
                return {...state,
                  isOperationSuccess:true
              }
        case ADD_ERROR:
                return {...state,
                  isOperationSuccess:false
              }

        case ITEM_LOADING:
              return {...state,
            loading:true}
        default:return state;
    }
}