import React from 'react'
import {List, Datagrid , TextField, EditButton, DeleteButton,} from 'react-admin'

const EventsList = (props) => {
    return(
    <List {...props}>
        <Datagrid>
            <TextField source='id'/>
            <TextField source='name'/>
            <TextField source='day'/>
            <TextField source='month'/>
            <EditButton basePath='/events'/>
            <DeleteButton basePath='/events'/>
        </Datagrid>
        </List>
    )
}

export default EventsList