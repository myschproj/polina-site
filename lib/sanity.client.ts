import { createClient } from "next-sanity";

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION;

export const client = createClient({
    projectId: "sex",
    dataset: "production",
    useCdn: true,
    apiVersion: "2022-02-03"
    //ricordarsi di cambiare use cdn?
})
