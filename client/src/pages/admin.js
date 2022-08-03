import React from "react";
import {Admin,Resource} from 'react-admin'
import restProvider from 'ra-data-simple-rest'
import EventsList from '../components/Events/EventsList'
import EventsCreate from '../components/Events/EventsCreate'
import EventsEdit from '../components/Events/EventsEdit'
import NewsList from '../components/News/NewsList'
import NewsCreate from '../components/News/NewsCreate'
import NewsEdit from '../components/News/NewsEdit'
import ResearchList from '../components/Research/ResearchList'
import ResearchCreate from '../components/Research/ResearchCreate'
import ResearchEdit from '../components/Research/ResearchEdit'
import ContactsList from '../components/Contacts/ContactsList'
import ContactsCreate from '../components/Contacts/ContactsCreate'
import ContactsEdit from '../components/Contacts/ContactsEdit'

const AdminPage = () => {
    return (
        <Admin basename="/Admin" dataProvider={restProvider('http://localhost:3000')}>
        <Resource 
            name='Events' 
            list={EventsList} 
            create={EventsCreate} 
            edit={EventsEdit}/>
        <Resource 
            name='News' 
            list={NewsList} 
            create={NewsCreate} 
            edit={NewsEdit}/>
        <Resource 
            name='Research' 
            list={ResearchList} 
            create={ResearchCreate} 
            edit={ResearchEdit}/>
        <Resource 
            name='Contacts' 
            list={ContactsList} 
            create={ContactsCreate} 
            edit={ContactsEdit}/>   
        </Admin>
    );
};
export default AdminPage;