import { API_ROUTE } from "@/routes";
import ky from "ky";

export const fetcher = ky.create({
	prefixUrl: API_ROUTE,
});
