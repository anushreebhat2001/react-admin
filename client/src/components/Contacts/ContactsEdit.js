import React from 'react'
import { Edit, SimpleForm, TextInput, DateInput } from 'react-admin'

const ContactsEdit = (props) => {
    return (
        <Edit title='Edit a Post'{...props}>
            <SimpleForm>
                <TextInput disabled source='id'/>
                <TextInput source='title'/>
                <TextInput source='name'/>
                <TextInput source='email eg format - "mailto:example@manipal.edu"'/>
                <TextInput source='mailid'/>
            </SimpleForm>
        </Edit>
    )
}

export default ContactsEdit