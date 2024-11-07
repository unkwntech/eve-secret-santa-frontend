import {
    Datagrid,
    DateField,
    List,
    ReferenceField,
    TextField,
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
