import { User } from "@/apis/user/user.schema";
import { fetcher } from "@/apis/fetcher";
import { apiRoutes } from "@/routes";

export const getUser = async (userId: number) => {
	try {
		const user = await fetcher.get(apiRoutes.user(userId)).json();
		const validUser = User.parse(user);

		return validUser;
	} catch (err) {
		console.error(err);
		throw err;
	}
};
