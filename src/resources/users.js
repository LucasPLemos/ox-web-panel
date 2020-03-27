import React from 'react';
import {
    // List Imports 
    List, Datagrid, TextField, ReferenceField, BooleanField,
    // Create/Edit Imports
    Create, Edit, SimpleForm, TextInput, BooleanInput, ReferenceInput, AutocompleteInput,
    //Validation Imports
    required, regex, minLength, maxLength, 
    //Button imports 
    DeleteButton, EditButton,
    // Misc

} from 'react-admin';

const validateUsername = [
    required(),
    minLength(2),
    maxLength(15)
];

const validatePassword = [
    required(),
    regex(
    /^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])[\w\d!@#$%_]{6,64}$/,
    'required upper and lower case letters. Can contain !@#$%_'
    )
];

export const UserList = ({ permissions, ...props }) =>  (
    <List {...props}>
        <Datagrid>
            <TextField source="username" />
            <TextField source="name" />
            <TextField source="description" />
            <BooleanField source ="isAdmin" />
            <ReferenceField source="costumer_id" reference="costumers">
                <TextField source="name" />
            </ReferenceField>
            <EditButton label="" />
            <DeleteButton label="" />
        </Datagrid>
    </List>
);

export const UserCreate = ({ permissions, ...props }) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="username" validate={ validateUsername } />
            <TextInput source="name" />
            <TextInput type="password" source="password" validate={ validatePassword }/>
            <TextInput source="description" />
            <ReferenceInput source="costumer_id" reference="costumers" >
                <AutocompleteInput optionText="name" />
            </ReferenceInput>
            <BooleanInput source="isAdmin" /> 
        </SimpleForm>
    </Create>
);

export const UserEdit = ({ permissions, ...props }) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="username" />
            <TextInput source="description" />
            <TextInput source="name" />
            <ReferenceInput source="costumer_id" reference="costumers">
                <AutocompleteInput optionText="name" />
            </ReferenceInput>
            <BooleanInput source="isAdmin" />
        </SimpleForm>
    </Edit>
);