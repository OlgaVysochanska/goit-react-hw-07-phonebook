import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { ContactListItem } from './ContactListItem/ContactListItem';

import { fetchAllContacts } from 'redux/contacts/contactsOperations';
import { selectFilteredContacts } from 'redux/contacts/contactsSelectors';

import styles from './ContactList.module.css';

export const ContactList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);

  const list = useSelector(selectFilteredContacts);

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
