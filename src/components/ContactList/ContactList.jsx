import style from './ContactList.module.css';
import ContactItem from '../ContactItem/ContactItem';
import { useSelector } from 'react-redux';
import { useGetContactsApiQuery } from 'redux/contactsAPI';
import Loader from 'components/Loader/Loader';

const ContactList = () => {
  const filter = useSelector(state => state.filter.value);
  const { data, isLoading } = useGetContactsApiQuery();

  const filteredContacts = () => {
    const normalizeFilter = filter.toLowerCase();
    return (
      data &&
      data.filter(contact =>
        contact.name.toLowerCase().includes(normalizeFilter)
      )
    );
  };

  const filterEl = filteredContacts();

  return (
    <>
      {isLoading && <Loader />}
      {
      <ul className={style.list}>
        {!isLoading && data && filterEl.length > 0 ? (
        filterEl.map(({ id, name, number }) => (
          <ContactItem 
            key={id}
            data={filterEl}
            id={id} 
            name={name} 
            number={number} 
          />
        ))
      ) : (
        <p className={style.text}>Your contact list is empty! Please add new contacts!</p>
      )}
      </ul>
      }
    </>
  );
};

export default ContactList;