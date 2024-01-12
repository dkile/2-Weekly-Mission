import { AuthActionContext, AuthContext } from "@/providers/AuthProvider";
import { useContext } from "react";

export const useAuth = () => {
	const isLoggedIn = useContext(AuthContext);

	return isLoggedIn;
};

export const useAuthAction = () => {
	const authAction = useContext(AuthActionContext);

	return authAction;
};
