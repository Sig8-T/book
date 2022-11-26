import { createClient } from "microcms-js-sdk";

export const client = createClient({
	serviceDomain: "k9bod1y5sm",
	apiKey: process.env.API_KEY,
});
