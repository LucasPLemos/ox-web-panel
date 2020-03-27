import React from 'react';
import {
    // List Imports 
    List, Datagrid, TextField, ReferenceManyField, NumberField, BooleanField,
    // Create/Edit Imports
    Create, Edit, SimpleForm, TextInput, TabbedForm, FormTab,
    //Validation Imports

    //Delete imports 
    DeleteButton, EditButton,
    // Misc

} from 'react-admin';

export const CostumerList = ({ permissions, ...props }) =>  (
    <List {...props}>
        <Datagrid>
            <TextField source="name" />
            <TextField source="description" />
            <EditButton label="" />
            <DeleteButton label="" />
        </Datagrid>
    </List>
);

export const CostumerCreate = ({ permissions, ...props }) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="description" />
        </SimpleForm>
    </Create>
);

export const CostumerEdit = ({ permissions, ...props }) => (
    <Edit {...props}>
        <TabbedForm>
            <FormTab label="summary">
                <TextInput source="name" />
                <TextInput source="description" />
            </FormTab>
            <FormTab label="users">
                <ReferenceManyField reference="users" target="costumer_id" addLabel={false}>
                    <Datagrid>
                        <TextField source="username" />
                        <TextField source="name" />
                        <TextField source="description" />
                        <EditButton />
                    </Datagrid>
                </ReferenceManyField>
            </FormTab>
            <FormTab label="contexts">
                <ReferenceManyField reference="contexts" target="costumer_id" addLabel={false}>
                <Datagrid>
                    <TextField source="name" />
                    <NumberField source="maxQuota" />
                    <BooleanField source="enabled" />
                    <EditButton label="" />
                    <DeleteButton label="" />
                </Datagrid>
                </ReferenceManyField>
            </FormTab>
        </TabbedForm>
    </Edit>
);