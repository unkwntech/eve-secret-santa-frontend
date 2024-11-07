import { Admin, EditGuesser, Resource, ShowGuesser } from "react-admin";
import { Layout } from "./Layout";
import { authProvider } from "./authProvider";
import { dataProvider } from "./dataProvider";
import { EventCreate, EventList } from "./objects/event.object";

export const App = () => (
    <Admin
        layout={Layout}
        dataProvider={dataProvider}
        authProvider={authProvider}
    >
        <Resource
            name="events"
            list={EventList}
            edit={EditGuesser}
            show={ShowGuesser}
            create={EventCreate}
        />
    </Admin>
);
