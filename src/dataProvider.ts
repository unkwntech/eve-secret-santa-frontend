import simpleRestProvider from "ra-data-simple-rest";
import { fetchUtils } from "react-admin";

export const dataProvider = simpleRestProvider(
    import.meta.env.VITE_SIMPLE_REST_URL,
    (url: string, options: any) => {
        if (!options.headers) {
            options.headers = new Headers({ Accet: "application/json" });
        }
        const token = localStorage.getItem("jwt");
        options.headers.set("Authorization", `Bearer ${token}`);

        return fetchUtils.fetchJson(url, options);
        //https://marmelab.com/react-admin/doc/2.9/Authentication.html#sending-credentials-to-the-api
    }
);
