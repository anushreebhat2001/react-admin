import React from 'react'
import {List, Datagrid , TextField, EmailField, EditButton, DeleteButton} from 'react-admin'

const ResearchList = (props) => {
    return(
    <List {...props}>
        <Datagrid>
            <TextField source='id'/>
            <TextField source='faculty'/>
            <TextField source='topic'/>
            <EditButton basePath='/research'/>
            <DeleteButton basePath='/research'/>
        </Datagrid>
        </List>
    )
}

export default ResearchList