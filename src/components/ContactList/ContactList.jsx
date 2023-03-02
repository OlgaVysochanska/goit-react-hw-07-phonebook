import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { ContactListItem } from './ContactListItem/ContactListItem';

import { fetchAllContacts } from 'redux/contacts/contactsOperations';
import { selectFilter } from 'redux/filter/filterSelectors';
import { selectAllContacts } from 'redux/contacts/contactsSelectors';

import styles from './ContactList.module.css';

export const ContactList = () => {
  const contacts = useSelector(selectAllContacts);
  const setFilter = useSelector(selectFilter);
  
  const dispatch = useDispatch();

  useEffect( () => {
    dispatch( fetchAllContacts );
  }, [ dispatch ] );

  const filterContacts = () => {
    const normalizedFilter = setFilter.toLowerCase();
    console.log( contacts );
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const list = filterContacts();

  return (
    <ul className={styles.ul}>
      {list.map(({ id, name, phone }) => {
        return (
          <ContactListItem key={id} name={name} phone={phone} nameId={id} />
        );
      })}
    </ul>
  );
};
