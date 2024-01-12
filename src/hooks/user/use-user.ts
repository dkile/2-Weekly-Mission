import { UserActionContext, UserContext } from "@/providers/UserProvider";
import { useContext } from "react";

export const useUser = () => {
	const user = useContext(UserContext);

	return user;
};

export const useUserAction = () => {
	const userAction = useContext(UserActionContext);

	return userAction;
};
