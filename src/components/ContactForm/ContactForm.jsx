import React, { useState } from "react";
import style from "./ContactForm.module.css"
import { useAddContactMutation, useGetContactsApiQuery } from "redux/contactsAPI";

export default function ContactForm({ onSubmit }){
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [addContact] = useAddContactMutation();
    const { data } =useGetContactsApiQuery

    const handleChange = e => {
        const prop = e.currentTarget.name;
        switch (prop) {
            case 'name':
                setName(e.currentTarget.value);
                break;
            case 'number':
                setNumber(e.currentTarget.value);    
                break
            default:
                throw new Error('Error');
        }
    };

    const handleAddContact = async e => {
        e.preventDefault();
        if (
            data.find(contact => contact.name.toLowerCase() === name.toLowerCase())
        ) {
            setName('');
            setNumber('');
            return alert(`Number: ${name} is already in phonebook`)
        }
        if (name && number) {
            await addContact({ name: name, number: number}).unwrap();
            setName('');
            setNumber('');
        }
    };
    
        return (
            <form className={style.form} onSubmit={handleAddContact}>
                <label>
                    Name
                    <input
                        className={style.inputName}
                        value={name}
                        onChange={handleChange}
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                    />
                </label>
                <label>
                    Number
                    <input
                        className={style.inputNumber}
                        value={number}
                        onChange={handleChange}
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        />
                </label>

                <button type="submit" className={style.buttonEditor}>
                    Add contact
                </button>
        </form>
    );
}