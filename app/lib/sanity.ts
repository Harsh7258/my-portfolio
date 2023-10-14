import { createClient } from "next-sanity";

const projectId = "tzkc469k";
const dataset = "production";
const apiVersion = "2023-01-01";

// const from the sanity project

export const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: true,
});