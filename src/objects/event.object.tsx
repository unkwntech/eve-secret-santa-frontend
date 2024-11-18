import {
    BooleanField,
    Create,
    Datagrid,
    DateField,
    List,
    ReferenceField,
    ReferenceInput,
    Show,
    SimpleForm,
    SimpleShowLayout,
    TextField,
    TextInput,
} from "react-admin";

export const EventList = () => (
    <List>
        <Datagrid>
            <TextField source="EventName" label="Event" />{" "}
            <ReferenceField
                source="OwnerID"
                reference="santas"
                label="Organizer"
            >
                <TextField source="CharacterName" />
            </ReferenceField>
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

export const EventShow = () => (
    <Show>
        <SimpleShowLayout>
            <ReferenceField
                source="OwnerID"
                reference="santas"
                label="Organizer"
            >
                <TextField source="CharacterName" />
            </ReferenceField>
            <TextField source="EventName" />
            <DateField source="SignupStartDate" />
            <DateField source="SignupEndDate" />
            <DateField source="DeliveryDeadline" />
            <BooleanField source="isPublished" />
            <BooleanField source="isOpen" />
        </SimpleShowLayout>
    </Show>
);
