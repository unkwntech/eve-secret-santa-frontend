import { Admin, Resource } from "react-admin";
import { Layout } from "./Layout";
import { authProvider } from "./authProvider";
import { EventList, EventShow } from "./objects/event.object";
import { secretSantaDataProvider } from "./prod.dataprovider";

let dataProvider;

// if (import.meta.env.DEV === true) {
//     dataProvider = devDataProvider;
// } else {
dataProvider = secretSantaDataProvider;
//}

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
