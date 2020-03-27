import React from 'react';
import {
    // List Imports 
    List, Datagrid, TextField,
    // Create Imports
    Create, SimpleForm, TextInput, ReferenceInput, SelectArrayInput,
    //Validation Imports

    //Delete imports 
    DeleteButton, EditButton,
    // Misc

} from 'react-admin';

export const GroupList = ({ permissions, ...props }) =>  (
    <List {...props}>
        <Datagrid>
            <TextField source="email" />
          <EditButton label="" />
          <DeleteButton label="" />
        </Datagrid>
    </List>
);

export const GroupCreate = ({ permissions, ...props }) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="email" />
            <ReferenceInput source="mailbox_id" reference="mailboxes" >
                <SelectArrayInput 
                    optionText="email"
                />
            </ReferenceInput>
        </SimpleForm>
    </Create>
);
