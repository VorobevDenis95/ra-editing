import {EDIT_ITEM, PUSH_LIST, 
    SET_PRICE_INPUT, SET_SERVICE_INPUT,
CHANGE_EDIT, REMOVE_ITEM} from './actions';

const initialState = {
    list: [],
    serviceInput: '',
    priceInput: '',
    editStatus: false,
    idEdit: 0,
}

const editReducer = (state = initialState, action) => {
  const itemIndex = state.list.findIndex(((el) => el.id === action.payload));
  const item = state.list[itemIndex];
  let newItem;
  if (item) {
    newItem = {
      id: item.id,
      service: state.serviceInput,
      price: state.priceInput,
    }
  }
    switch (action.type) {
      case PUSH_LIST:
        return {
            ...state,
            list: [...state.list, action.payload],
            serviceInput: '',
            priceInput: '',
            
        }
      case EDIT_ITEM: 
      return {
            ...state,
            serviceInput: action.payload.service,
            priceInput: action.payload.price,
            editStatus: true,
            idEdit: action.payload.id,
      }
      case SET_SERVICE_INPUT: 
      return {
        ...state,
        serviceInput: action.payload,
      }
      case SET_PRICE_INPUT:
        return {
          ...state,
          priceInput: action.payload,
        }
      case CHANGE_EDIT:
        console.log(item, itemIndex, action.payload)
        return {
            ...state,
            list: [...state.list.slice(0, itemIndex),
            newItem,
            ...state.list.slice(itemIndex + 1)
          ],
            serviceInput: '',
            priceInput: '',
            editStatus: false,


        }  
      case REMOVE_ITEM:
      return {
        ...state,
        list: state.list.filter(el => el.id != action.payload)
      }
      default: 
        return state   
    }
}

export default editReducer;