import React from 'react'
import { Edit, SimpleForm, TextInput, DateInput } from 'react-admin'

const EventsEdit = (props) => {
    return (
        <Edit title='Edit a Post'{...props}>
            <SimpleForm>
                <TextInput disabled source='id'/>
                <TextInput source='name'/>
                <TextInput source='day'/>
                <TextInput source='month'/>
                <TextInput source='venue'/>
                <TextInput source='time'/>
                <TextInput multiline source='event description' />
            </SimpleForm>
        </Edit>
    )
}

export default EventsEdit