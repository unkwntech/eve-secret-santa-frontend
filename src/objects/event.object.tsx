import {
    Create,
    Datagrid,
    DateField,
    List,
    ReferenceInput,
    SimpleForm,
    TextField,
    TextInput,
} from "react-admin";

export const EventList = () => (
    <List>
        <Datagrid>
            <TextField source="EventName" label="Event" />
            <TextField source="OwnerID" label="Organizer" />
            <DateField source="SignupStartDate" label="Signups Begin" />
            <DateField source="SignupEndDate" label="Signups End" />
            <DateField
                source="DeliveryDeadline"
                label="Gift Delivery Deadline"
            />
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
