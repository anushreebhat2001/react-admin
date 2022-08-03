import React from 'react'
import { DateInput, Edit, SimpleForm, TextInput } from 'react-admin'

const NewsEdit = (props) => {
    return (
        <Edit title='Edit a Post'{...props}>
            <SimpleForm>
                <TextInput disabled source='id'/>
                <TextInput source='name'/>
                <DateInput source='date'/>  
                <TextInput multiline source='description'/>              
            </SimpleForm>
        </Edit>
    )
}

export default NewsEdit