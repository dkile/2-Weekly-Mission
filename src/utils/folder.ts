import relativeTime from "@/utils/dayjs-plugin/dayJSRelativeTime";
import dayjs from "dayjs";

dayjs.extend(relativeTime);

export const formatPastInCard = (
	past: string | number | Date | dayjs.Dayjs,
) => {
	return dayjs(past).fromNow();
};

export const formatCreatedAtInCard = (
	createdAt: string | number | Date | dayjs.Dayjs,
) => {
	return dayjs(createdAt).format("YYYY.M.D");
};

declare module "dayjs" {
	interface Dayjs {
		fromNow(): string;
	}
}
