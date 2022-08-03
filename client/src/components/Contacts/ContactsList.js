import React from 'react'
import {List, Datagrid , TextField, EditButton, DeleteButton, EmailField,} from 'react-admin'

const ContactsList = (props) => {
    return(
    <List {...props}>
        <Datagrid>
            <TextField source='id'/>
            <TextField source='title'/>
            <TextField source='name'/>
            <EmailField source='mailid'/>
            <EditButton basePath='/contacts'/>
            <DeleteButton basePath='/contacts'/>
        </Datagrid>
        </List>
    )
}

export default ContactsList