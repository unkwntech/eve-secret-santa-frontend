import {
    CreateParams,
    CreateResult,
    DeleteManyParams,
    DeleteParams,
    GetListParams,
    GetListResult,
    GetManyParams,
    GetManyReferenceParams,
    GetManyReferenceResult,
    GetManyResult,
    GetOneParams,
    GetOneResult,
    UpdateManyParams,
    UpdateParams,
} from "react-admin";

// export const dataProvider = simpleRestProvider(
//     import.meta.env.VITE_SIMPLE_REST_URL,
//     (url: string, options: any) => {
//         if (!options.headers) {
//             options.headers = new Headers({ Accet: "application/json" });
//         }
//         const token = localStorage.getItem("jwt");
//         options.headers.set("Authorization", `Bearer ${token}`);
//         return fetchUtils.fetchJson(url, options);
//         //https://marmelab.com/react-admin/doc/2.9/Authentication.html#sending-credentials-to-the-api
//     }
// );

const secretSantaDataProvider = {
    getList: async (
        resource: string,
        params: GetListParams
    ): Promise<GetListResult> => {
        const token = localStorage.getItem("jwt");
        if (!token) return Promise.reject();

        return fetch(`${import.meta.env.VITE_SIMPLE_REST_URL}/${resource}/`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
            .then((res) => res.json())
            .then((res: any[]) => {
                return {
                    data: res,
                    total: res.length,
                    meta: {},
                };
            });
    },
    getOne: async (
        resource: string,
        params: GetOneParams
    ): Promise<GetOneResult> => {
        const token = localStorage.getItem("jwt");
        if (!token) return Promise.reject();

        return fetch(
            `${import.meta.env.VITE_SIMPLE_REST_URL}/${resource}/${params.id}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        )
            .then((res) => res.json())
            .then((res: any) => {
                return {
                    data: res,
                    total: res.length,
                    meta: {},
                };
            });
    },
    getMany: async (
        resource: string,
        params: GetManyParams
    ): Promise<GetManyResult> => {
        const token = localStorage.getItem("jwt");
        if (!token) return Promise.reject();

        return fetch(
            `${import.meta.env.VITE_SIMPLE_REST_URL}/${resource}/${params.ids}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        )
            .then((res) => res.json())
            .then((res: any[]) => {
                console.log({
                    data: res,
                    total: res.length,
                    meta: {},
                });
                return {
                    data: [res],
                    total: res.length,
                    meta: {},
                };
            });
    },
    getManyReference: async (
        resource: string,
        params: GetManyReferenceParams
    ): Promise<GetManyReferenceResult> => {
        const token = localStorage.getItem("jwt");
        if (!token) return Promise.reject();

        return fetch(
            `${import.meta.env.VITE_SIMPLE_REST_URL}/${resource}/${params.id}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        )
            .then((res) => res.json())
            .then((res: any) => {
                return {
                    data: res,
                    total: res.length,
                    meta: {},
                };
            });
    },
    create: (resource: string, params: CreateParams): Promise<CreateResult> => {
        console.error("create not yet implimented");
        return Promise.reject();
    },

    update: (resource: string, params: UpdateParams): Promise<any> => {
        console.error("update not yet implimented");
        return Promise.reject();
    },

    updateMany: (resource: string, params: UpdateManyParams): Promise<any> => {
        console.error("udpate many not yet implimented");
        return Promise.reject();
    },

    delete: (resource: string, params: DeleteParams): Promise<any> => {
        console.error("delete not yet implimented");
        return Promise.reject();
    },

    deleteMany: (resource: string, params: DeleteManyParams): Promise<any> => {
        console.error("delete not yet implimented");
        return Promise.reject();
    },
};

export const dataProvider = secretSantaDataProvider;
