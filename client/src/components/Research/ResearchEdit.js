import React from 'react'
import { Edit, SimpleForm, TextInput } from 'react-admin'

const ResearchEdit = (props) => {
    return (
        <Edit title='Edit a Post'{...props}>
            <SimpleForm>
                <TextInput disabled source='id'/>
                <TextInput source='faculty'/>
                <TextInput source='topic'/>
                <TextInput source='email'/>
                <TextInput source='purelink'/>                
            </SimpleForm>
        </Edit>
    )
}

export default ResearchEdit