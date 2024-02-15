import React from "react";
import {PUSH_LIST} from '../redux/actions'
import { useDispatch, useSelector } from "react-redux";
import List from "./List";
import { changeItem, changePrice, changeService } from "../redux/functionsActions";
import {nanoid} from 'nanoid';

const Root = () => {
    const dispatch = useDispatch();
    const {serviceInput, priceInput, list, editStatus, idEdit} = useSelector(state => state.edit);

    const changeServiceInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        changeService(dispatch)(e.target.value);
    }

    const changePriceInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        changePrice(dispatch)(e.target.value);
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement> ) => {
        e.preventDefault();
        if (!editStatus) {
            const action = {
                type: PUSH_LIST,
                payload: {
                    id: nanoid(),
                    service: serviceInput,
                    price: priceInput,
                }, 
            }
            dispatch(action);
            return;
        }

        changeItem(dispatch)(idEdit);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" value={serviceInput} onChange={changeServiceInput} />
                <input type="text" value={priceInput} onChange={changePriceInput} />
                <button type="submit">Save</button>
                {editStatus && <button >Cancel</button>}
            </form>
            <List list={list} /> 
        </>
    )
}

export default Root;