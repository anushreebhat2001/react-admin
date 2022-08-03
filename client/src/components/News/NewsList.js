import React from 'react'
import {List, Datagrid , TextField, EditButton, DeleteButton, DateField} from 'react-admin'

const NewsList = (props) => {
    return(
    <List {...props}>
        <Datagrid>
            <TextField source='id'/>
            <TextField source='name'/>
            <DateField source='date'/>
            <EditButton basePath='/news'/>
            <DeleteButton basePath='/news'/>
        </Datagrid>
        </List>
    )
}

export default NewsList