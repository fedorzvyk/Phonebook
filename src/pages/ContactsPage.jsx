// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { Helmet } from 'react-helmet';
// import { TaskList } from 'components/TaskList/TaskList';
// import { TaskEditor } from 'components/TaskEditor/TaskEditor';
// import { fetchTasks } from 'redux/tasks/operations';
// import { selectLoading } from 'redux/tasks/selectors';

import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import { Box } from '../commonStyles/Box';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/contacts.operations';
import { selectError, selectIsLoading } from 'redux/contacts/selectors';

export default function ContactsPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  //   const dispatch = useDispatch();
  //   const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {/* <Helmet>
        <title>Your contacts</title>
      </Helmet> */}
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        gridGap={5}
        as="section"
      >
        <h1>Phonebook</h1>
        {isLoading && !error && <b>Request in progress...</b>}
        {error && <b>{error}</b>}
        <ContactForm />
      </Box>

      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        gridGap={5}
        as="section"
      >
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </Box>
    </>
  );
}
