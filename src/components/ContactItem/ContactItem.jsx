import React from 'react';
import style from './ContactItem.module.css';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactSlice';
import { ReactComponent as Delete } from "./delete-icon.svg";

const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const contactsDelete = id => dispatch(deleteContact(id));

  return (
    <li id={id} className={style.item}>
      <p className={style.contact}>
        {name}............
        {number}
      </p>
      <button
        className={style.btn}
        type="submit"
        onClick={() => contactsDelete(id)}
      >
        <Delete
            style={{
              width: '26px',
              height: '20px',
            }}
        />
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactItem;