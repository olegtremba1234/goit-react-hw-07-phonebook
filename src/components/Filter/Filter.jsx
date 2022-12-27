import { useSelector, useDispatch } from 'react-redux';
import { filterContact } from 'redux/filterSlice';
import style from "./Filter.module.css"

export default function Filter() {
    const dispatch = useDispatch();
    const filter = useSelector(state => state.filter.value);
  
    const filterChange = e => {
      dispatch(filterContact(e.currentTarget.value));
    };

    return (
        <div className={style.filter}>
            <label className={style.labelFilter}>
                Filter
                <input
                    type="name"
                    value={filter}
                    onChange={filterChange}
                    className={style.filterInput}
                />
            </label>
        </div>
    )
};