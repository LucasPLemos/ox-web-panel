import React from 'react';
import {
    // List Imports 
    List, Datagrid, TextField, ReferenceField, BooleanField, NumberField, ReferenceManyField,
    // Create/Edit Imports
    Create, Edit, SimpleForm, TextInput, ReferenceInput, AutocompleteInput, BooleanInput, NumberInput, TabbedForm, FormTab,
    //Validation Imports

    //Delete imports 
    DeleteButton, EditButton
    // Misc

} from 'react-admin';

export const ContextList = ({ permissions, ...props }) =>  (
    <List {...props}>
        <Datagrid>
            <TextField source="name" />
            <NumberField source="maxQuota" />
            <BooleanField source="enabled" />
            <ReferenceField source="costumer_id" reference="costumers">
                <TextField source="name" />
            </ReferenceField>
            <EditButton label="" />
            <DeleteButton label="" />
        </Datagrid>
    </List>
);

export const ContextCreate = ({ permissions, ...props }) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <NumberInput source="maxQuota" />
            <TextInput type="password" source="password" />
            <ReferenceInput source="costumer_id" reference="costumers" >
                <AutocompleteInput optionText="name" />
            </ReferenceInput>
        </SimpleForm>
    </Create>
);

export const ContextEdit = ({ permissions, ...props }) => (
    <Edit {...props}>
        <TabbedForm>
            <FormTab label="summary">
                <TextInput source="name" />
                <TextInput source="description" />
                <NumberInput source="maxQuota" />
                <BooleanInput source="enabled" />
                <ReferenceInput source="costumer_id" reference="costumers" >
                    <AutocompleteInput optionText="name" />
                </ReferenceInput>
            </FormTab>
            <FormTab label="mailboxes">
                <ReferenceManyField reference="mailboxes" target="ctx_id" addLabel={false}>
                    <Datagrid>
                        <TextField source="display_name" />
                        <TextField source="email" />
                        <NumberField source="maxQuota" />
                        <BooleanField source="enabled" />
                        <EditButton label="" />
                        <DeleteButton label="" />
                    </Datagrid>
                </ReferenceManyField>
            </FormTab>
            <FormTab label="groups">

            </FormTab>
        </TabbedForm>
    </Edit>
);