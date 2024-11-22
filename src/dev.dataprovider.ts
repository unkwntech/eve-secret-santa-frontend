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

const ShapeManyData = (res: any): any => {
    let data: any = res;
    if (!Array.isArray(res)) {
        data = [res];
    }
    return data;
};

export const devDataProvider = {
    getList: async (
        resource: string,
        params: GetListParams
    ): Promise<GetListResult> => {
        const token = localStorage.getItem("jwt");
        if (!token) return Promise.reject();

        let data = [];

        switch (resource) {
            case "events":
                console.log("events");
                data.push({
                    id: "1",
                    OwnerID: "1978535095",
                    EventName: "Test Event 1",
                    SignupStartDate: new Date(
                        "Thu Nov 30 2024 20:59:57 GMT-0600 (Central Standard Time)"
                    ),
                    SignupEndDate: new Date(
                        "Thu Dec 7 2024 20:59:57 GMT-0600 (Central Standard Time)"
                    ),
                    DeliveryDeadline: new Date(
                        "Thu Dec 14 2024 20:59:57 GMT-0600 (Central Standard Time)"
                    ),
                    isDeleted: false,
                    isPublished: true,
                    isOpen: true,
                });
                data.push({
                    id: "2",
                    OwnerID: "267689183",
                    EventName: "Test Event 2",
                    SignupStartDate: new Date(
                        "Thu Nov 31 2024 20:59:57 GMT-0600 (Central Standard Time)"
                    ),
                    SignupEndDate: new Date(
                        "Thu Dec 8 2024 20:59:57 GMT-0600 (Central Standard Time)"
                    ),
                    DeliveryDeadline: new Date(
                        "Thu Dec 15 2024 20:59:57 GMT-0600 (Central Standard Time)"
                    ),
                    isDeleted: false,
                    isPublished: true,
                    isOpen: false,
                });
                break;
            case "santas":
                data.push({
                    id: "1978535095",
                    CharacterName: "Ibn Khatab",
                    CorporationID: 263585335,
                    CorporationName: "Black Omega Security",
                    AllianceID: 99011978,
                    AllianceName: "Minmatar FL33T Alliance",
                });
                data.push({
                    id: "267689183",
                    CharacterName: "Commander Ramnov",
                    CorporationID: 263585335,
                    CorporationName: "Black Omega Security",
                    AllianceID: 99011978,
                    AllianceName: "Minmatar FL33T Alliance",
                });
                break;
            default:
        }

        return {
            data,
            total: data.length,
        };
    },
    getOne: async (
        resource: string,
        params: GetOneParams
    ): Promise<GetOneResult> => {
        const token = localStorage.getItem("jwt");
        if (!token) return Promise.reject();
        let data = {};

        console.log(resource);
        console.log(params.id);

        switch (resource) {
            case "events":
                switch (params.id) {
                    case "1":
                        data = {
                            id: "1",
                            OwnerID: "1978535095",
                            EventName: "Test Event 1",
                            SignupStartDate: new Date(
                                "Thu Nov 30 2024 20:59:57 GMT-0600 (Central Standard Time)"
                            ),
                            SignupEndDate: new Date(
                                "Thu Dec 7 2024 20:59:57 GMT-0600 (Central Standard Time)"
                            ),
                            DeliveryDeadline: new Date(
                                "Thu Dec 14 2024 20:59:57 GMT-0600 (Central Standard Time)"
                            ),
                            isDeleted: false,
                            isPublished: true,
                            isOpen: true,
                        };
                        break;
                    case "2":
                        data = {
                            id: "2",
                            OwnerID: "267689183",
                            EventName: "Test Event 2",
                            SignupStartDate: new Date(
                                "Thu Nov 31 2024 20:59:57 GMT-0600 (Central Standard Time)"
                            ),
                            SignupEndDate: new Date(
                                "Thu Dec 8 2024 20:59:57 GMT-0600 (Central Standard Time)"
                            ),
                            DeliveryDeadline: new Date(
                                "Thu Dec 15 2024 20:59:57 GMT-0600 (Central Standard Time)"
                            ),
                            isDeleted: false,
                            isPublished: true,
                            isOpen: false,
                        };
                        break;
                }
                break;
            case "santas":
                switch (params.id) {
                    case "1978535095":
                        data = {
                            id: "1978535095",
                            CharacterName: "Ibn Khatab",
                            CorporationID: 263585335,
                            CorporationName: "Black Omega Security",
                            AllianceID: 99011978,
                            AllianceName: "Minmatar FL33T Alliance",
                        };
                        break;
                    case "267689183":
                        data = {
                            id: "267689183",
                            CharacterName: "Commander Ramnov",
                            CorporationID: 263585335,
                            CorporationName: "Black Omega Security",
                            AllianceID: 99011978,
                            AllianceName: "Minmatar FL33T Alliance",
                        };
                        break;
                }
                break;
            default:
        }

        console.log(data);
        return {
            data,
            meta: {},
        };
    },
    getMany: async (
        resource: string,
        params: GetManyParams
    ): Promise<GetManyResult> => {
        const token = localStorage.getItem("jwt");
        if (!token) return Promise.reject();
        let data = [];

        switch (resource) {
            case "events":
                console.log("events");
                data.push({
                    id: "1",
                    OwnerID: "1978535095",
                    EventName: "Test Event 1",
                    SignupStartDate: new Date(
                        "Thu Nov 30 2024 20:59:57 GMT-0600 (Central Standard Time)"
                    ),
                    SignupEndDate: new Date(
                        "Thu Dec 7 2024 20:59:57 GMT-0600 (Central Standard Time)"
                    ),
                    DeliveryDeadline: new Date(
                        "Thu Dec 14 2024 20:59:57 GMT-0600 (Central Standard Time)"
                    ),
                });
                data.push({
                    id: "2",
                    OwnerID: "267689183",
                    EventName: "Test Event 2",
                    SignupStartDate: new Date(
                        "Thu Nov 31 2024 20:59:57 GMT-0600 (Central Standard Time)"
                    ),
                    SignupEndDate: new Date(
                        "Thu Dec 8 2024 20:59:57 GMT-0600 (Central Standard Time)"
                    ),
                    DeliveryDeadline: new Date(
                        "Thu Dec 15 2024 20:59:57 GMT-0600 (Central Standard Time)"
                    ),
                });
                break;
            case "santas":
                data.push({
                    id: "1978535095",
                    CharacterName: "Ibn Khatab",
                    CorporationID: 263585335,
                    CorporationName: "Black Omega Security",
                    AllianceID: 99011978,
                    AllianceName: "Minmatar FL33T Alliance",
                });
                data.push({
                    id: "267689183",
                    CharacterName: "Commander Ramnov",
                    CorporationID: 263585335,
                    CorporationName: "Black Omega Security",
                    AllianceID: 99011978,
                    AllianceName: "Minmatar FL33T Alliance",
                });
                break;
            default:
        }

        return {
            data,
        };
    },
    getManyReference: async (
        resource: string,
        params: GetManyReferenceParams
    ): Promise<GetManyReferenceResult> => {
        const token = localStorage.getItem("jwt");
        if (!token) return Promise.reject();

        throw new Error("Not Implimented");
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
