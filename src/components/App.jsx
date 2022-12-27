import ContactList from "./ContactList/ContactList";
import ContactForm from "./ContactForm/ContactForm";
import Filter from "./Filter/Filter";
import style from "./App.module.css"

export default function App () {
    return (
      <div className={style.container}>
        <h1>Phonebook</h1>
      <ContactForm />
      <h2 className={style.titleContacts}>Contacts</h2>
      <Filter />
      <ContactList />
      </div>
    );
}