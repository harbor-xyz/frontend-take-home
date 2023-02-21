export const TESTNETS = [
    {
        id: "ABCD",
        name: "Testnet 1",
        status: "RUNNING",
        testnet_off_chain_actors: [
            {
                name: "Actor 1",
                status: "RUNNING",
                __typename: "testnet_off_chain_actor",
            },
            {
                name: "Actor 2",
                status: "UPDATING",
                __typename: "testnet_off_chain_actor",
            },
        ],
        testnet_chains: [
            { chain: "polygon", status: "RUNNING", __typename: "testnet_chain" },
            { chain: "avalance", status: "UPDATING", __typename: "testnet_chain" },
        ],
        testnet_image: {
            project_id: "project1",
            id: "image1",
            __typename: "testnet_image",
        },
        created_at: "2022-02-01T09:00:00Z",
        updated_at: "2022-02-01T10:00:00Z",
        __typename: "testnet",
    },
    {
        name: "Testnet 1",
        id: "testnet1",
        status: "RUNNING",
        endpoint: "http://testnet1.com",
        created_at: "2022-02-01T00:00:00.000Z",
        updated_at: "2022-02-01T00:00:00.000Z",
        testnet_off_chain_actors: [
            {
                name: "Actor 1",
                status: "RUNNING",
                __typename: "testnet_off_chain_actor",
            },
            {
                name: "Actor 2",
                status: "UPDATING",
                __typename: "testnet_off_chain_actor",
            },
        ],
        testnet_chains: [
            { chain: "ethereum", status: "RUNNING", __typename: "testnet_chain" },
            { chain: "polygon", status: "RUNNING", __typename: "testnet_chain" },
        ],
        testnet_image: {
            project_id: "project1",
            id: "image1",
            __typename: "testnet_image",
        },
        __typename: "testnet",
    },
    {
        id: "ABCD",
        name: "Testnet 1",
        status: "RUNNING",
        testnet_off_chain_actors: [
            {
                name: "Actor 1",
                status: "RUNNING",
                __typename: "testnet_off_chain_actor",
            },
            {
                name: "Actor 2",
                status: "UPDATING",
                __typename: "testnet_off_chain_actor",
            },
        ],
        testnet_chains: [
            { chain: "polygon", status: "RUNNING", __typename: "testnet_chain" },
            { chain: "avalance", status: "UPDATING", __typename: "testnet_chain" },
        ],
        testnet_image: {
            project_id: "project1",
            id: "image1",
            __typename: "testnet_image",
        },
        created_at: "2022-02-01T09:00:00Z",
        updated_at: "2022-02-01T10:00:00Z",
        __typename: "testnet",
    },
];
