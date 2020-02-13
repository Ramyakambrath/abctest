import { GET_BRAND, UPDATE_BRAND,ADD_BRAND,DELETE_BRAND,BRAND_LOADING,DELETE_SUCCESS,DELETE_ERROR,UPDATE_SUCCESS,UPDATE_ERROR,ADD_SUCCESS,ADD_ERROR} from '../Actions/types'


const initialState={
    brandList:[],
    brandrListdb:[],
    loading: false,
    isOperationSuccess:false,
    totalRecords:''
}

export default function(state=initialState,action){

    switch(action.type){
        case GET_BRAND:
            return {...state,
            brandList:action.payload.map(d=>d.name),
            brandListdb:action.payload,
            loading: false,
            totalRecords:action.payload.length}

        case DELETE_BRAND:
          
              return {...state,
              brandListdb:state.brandListdb.filter((item)=>item._id !==action.payload.deletedBrand._id),
              brandList:state.brandListdb.map(item =>item.name),
          }
       
        case DELETE_SUCCESS:
              return {...state,
                isOperationSuccess:true
            }
        case DELETE_ERROR:
              return {...state,
                isOperationSuccess:false
            }
        
        
        case UPDATE_BRAND:
             console.log('xx',action.payload.updatedBrand)
             console.log('yy', state.brandListdb)
            const updatedBrand=action.payload.updatedBrand
                return {...state,
                  brandListdb: state.brandListdb.map(item => item._id === updatedBrand._id ? updatedBrand : item),
                  brandList:state.brandListdb.map(item =>item.name),
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

        case ADD_BRAND:
           
              return {...state,
                brandList:[action.payload.brand.name,...state.brandList],
                brandListdb:[action.payload.brand,...state.brandListdb]}

        case ADD_SUCCESS:
                return {...state,
                  isOperationSuccess:true
              }
        case ADD_ERROR:
                return {...state,
                  isOperationSuccess:false
              }

        case BRAND_LOADING:
              return {...state,
            loading:true}
        default:return state;
    }
}