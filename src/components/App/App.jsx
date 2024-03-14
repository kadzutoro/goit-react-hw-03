import { useState, useEffect } from 'react'
import './App.css'
import ContactForm from '../ContactForm/ContactForm'
import SearchBox from '../SearchBox/SearchBox'
import ContactList from '../ContactList/ContactList'


function App() {
    const [contacts, setContacts] = useState(
        () => JSON.parse(localStorage.getItem('saved-contacts')) ?? []
      );
    const [filter, setFilter] = useState('');
    const addContact = (newContact) => {
        setContacts((prevContacts) => {
            return [...prevContacts, newContact]
        })
    }

    useEffect(() => {
        localStorage.setItem('saved-contacts', JSON.stringify(contacts));
      }, [contacts]);

    const deleteContact = (contactId) => {
        setContacts(prevContacts => {
            return prevContacts.filter(contact => contact.id !== contactId)
        })
    }
    const visibleContacts = contacts.filter(contact => 
        contact.name.toLowerCase().includes(filter.toLowerCase()))
    
    return (
<div>
    <h1>Phonebook</h1>
    <ContactForm onAdd={addContact} />
    <SearchBox value={filter} onFilter={setFilter} />
    <ContactList contacts={visibleContacts} onDelete={deleteContact} />
</div>
    )
}
export default App
