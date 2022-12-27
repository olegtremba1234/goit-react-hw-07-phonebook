import React from 'react';
import style from './ContactItem.module.css';
import PropTypes from 'prop-types';
import { ReactComponent as Delete } from "./delete-icon.svg";
import { useDeleteContactMutation } from 'redux/contactsAPI';

const ContactItem = ({ id, name, phone }) => {
  const [deleteContact] = useDeleteContactMutation();

  const handleDeleteContact = async id => {
    await deleteContact(id).unwrap();
  };

  return (
    <li id={id} className={style.item}>
      <p className={style.contact}>
        {name}............
        {phone}
      </p>
      <button
        className={style.btn}
        type="submit"
        onClick={() => handleDeleteContact(id)}
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
  phone: PropTypes.string.isRequired,
};

export default ContactItem;