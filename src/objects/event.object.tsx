import {
    Button,
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
    TopToolbar,
    useRecordContext,
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

export const JoinButton = (props: any) => {
    const record = useRecordContext();
    if (!record) return;

    const handleClick = () => {
        return fetch(
            `${import.meta.env.VITE_SIMPLE_REST_URL}/events/${record.id}/join`,
            {
                method: "put",
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("jwt")}`,
                },
            }
        )
            .then((res) => res.text())
            .then((res: any) => {
                alert(res);
            });
    };
    return (
        <Button onClick={handleClick} aria-label="AddCircleIcon" {...props} />
    );
};

export const EventShowActions = () => (
    <TopToolbar>
        <JoinButton label="Join" />
    </TopToolbar>
);

export const EventShow = () => (
    <Show actions={<EventShowActions />}>
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
            <TextField source="MyMatch" />
        </SimpleShowLayout>
    </Show>
);
