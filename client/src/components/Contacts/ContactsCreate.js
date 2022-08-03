import React from 'react'
import { Create, SimpleForm, TextInput } from 'react-admin'

const ContactsCreate = (props) => {
    return (
        <Create title='Create a Post'{...props}>
            <SimpleForm>
                <TextInput source='title'/>
                <TextInput source='name'/>
                <TextInput source='email eg format - "mailto:example@manipal.edu"'/>
                <TextInput source='mailid'/>
            </SimpleForm>
        </Create>
    )
}

export default ContactsCreate