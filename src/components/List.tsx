import { useDispatch, useSelector } from "react-redux"
import {edit, remove } from "../redux/functionsActions";

interface PropsItem {
    id: number,
    service: string,
    price: string
}

const List = ({list} ) => {
    const dispatch = useDispatch();
    const {editStatus} = useSelector(state => state.edit);

    const clickEdit = (id: number) => {
      const item = list.find((el : PropsItem) => el.id === id);
      if (item) {
        edit(dispatch)(item);
      }
    }

    const removeItem = (id: number) => {
        remove(dispatch)(id);
    }

  return (
    <div>
        {list.map((el: PropsItem) => (
            <div key={el.id}>
                <span>{el.service}</span>
                <span>{el.price}</span>
                { !editStatus && <button onClick={() => clickEdit(el.id)}>Редактировать</button>}
                { !editStatus && <button onClick={() =>removeItem(el.id) }>Удалить</button>}
            </div>
        ))}
    </div>
  )   
}

export default List;