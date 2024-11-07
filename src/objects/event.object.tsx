import {
    Create,
    Datagrid,
    DateField,
    List,
    ReferenceField,
    ReferenceInput,
    SimpleForm,
    TextField,
    TextInput,
} from "react-admin";

export const EventList = () => (
    <List>
        <Datagrid>
            <ReferenceField source="_id" reference="events" />
            <TextField source="EventName" />
            <TextField source="OwnerID" />
            <DateField source="SignupStartDate" />
            <DateField source="SignupEndDate" />
            <DateField source="DeliveryDeadline" />
        </Datagrid>
    </List>
);

export const EventCreate = () => (
    <Create>
        <SimpleForm>
            <ReferenceInput source="_id" reference="events" />
            <TextInput source="EventName" />
            <DateField source="SignupStartDate" />
            <DateField source="SignupEndDate" />
            <DateField source="DeliveryDeadline" />
        </SimpleForm>
    </Create>
);
