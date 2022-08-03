import React from 'react'
import { Create, SimpleForm, TextInput } from 'react-admin'

const EventsCreate = (props) => {
    return (
        <Create title='Create a Post'{...props}>
            <SimpleForm>
                <TextInput source='name'/>
                <TextInput source='day'/>
                <TextInput source='month'/>
                <TextInput source='venue'/>
                <TextInput source='time'/>
                <TextInput multiline source='event description' />
            </SimpleForm>
        </Create>
    )
}

export default EventsCreate