import { useSelector, useDispatch } from 'react-redux';
import { filterContact } from 'redux/contactSlice';
import style from "./Filter.module.css"

export default function Filter({ value, onChange }) {
    const dispatch = useDispatch();
    const filter = useSelector(state => state.contacts.filter);
  
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