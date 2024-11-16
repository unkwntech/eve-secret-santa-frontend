import { Admin, Resource } from "react-admin";
import { Layout } from "./Layout";
import { authProvider } from "./authProvider";
import { dataProvider } from "./dataProvider";
import { EventList, EventShow } from "./objects/event.object";

export const App = () => (
    <Admin
        layout={Layout}
        dataProvider={dataProvider}
        authProvider={authProvider}
    >
        <Resource
            name="events"
            list={EventList}
            // edit={EditGuesser}
            show={EventShow}
            // create={EventCreate}
        />
    </Admin>
);
