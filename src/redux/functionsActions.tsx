import { SET_PRICE_INPUT, SET_SERVICE_INPUT, EDIT_ITEM, REMOVE_ITEM, CHANGE_EDIT } from "./actions";

export const changePrice = (dispatch) => (value) => {
    const action = {
        type: SET_PRICE_INPUT,
        payload: value,
    }
    dispatch(action);
}

export const changeService = (dispatch) => (value) => {
    const action = {
        type: SET_SERVICE_INPUT,
        payload: value,
    }
    dispatch(action);
}

export const edit = (dispatch) => (item) => {
    const action = {
        type: EDIT_ITEM,
        payload: item,
    }
    dispatch(action);
}

export const remove = (dispatch) => (id) => {
    const action = {
        type: REMOVE_ITEM,
        payload: id
    }
    dispatch(action);
}

export const changeItem = (dispatch) => (id) => {
    const action = {
        type: CHANGE_EDIT,
        payload: id
    }
    dispatch(action);
}
