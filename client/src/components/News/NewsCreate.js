import React from 'react'
import { Create, SimpleForm, TextInput, DateInput} from 'react-admin'

const NewsCreate = (props) => {
    return (
        <Create title='Create a Post'{...props}>
            <SimpleForm>
                <TextInput source='name'/>
                <DateInput source='date'/>  
                <TextInput multiline source='description'/>              
            </SimpleForm>
        </Create>
    )
}

export default NewsCreate