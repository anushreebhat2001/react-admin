import React from 'react'
import { Create, SimpleForm, TextInput} from 'react-admin'

const ResearchCreate = (props) => {
    return (
        <Create title='Create a Post'{...props}>
            <SimpleForm>
                <TextInput source='faculty'/>
                <TextInput source='topic'/>
                <TextInput source='email'/>
                <TextInput source='purelink'/>
            </SimpleForm>
        </Create>
    )
}

export default ResearchCreate