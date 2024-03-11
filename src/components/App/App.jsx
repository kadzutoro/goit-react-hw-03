import { useState } from 'react'
import './App.css'
import initialContacts from '../contacts.json'
import ContactForm from '../ContactForm/ContactForm'
import SearchBox from '../SearchBox/SearchBox'
import ContactList from '../ContactList/ContactList'


function App() {
    const [contacts, setcontacts] = useState(initialContacts);
    const [filter, setFilter] = useState('');
    const addContact = (newContact) => {
        setcontacts((prevContacts) => {
            return [...prevContacts, newContact]
        })
    }
    const deleteContact = (contactId) => {
        setcontacts(prevContacts => {
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
