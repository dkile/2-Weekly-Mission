import { PropsWithChildren, createContext, useState } from "react";

export const AuthContext = createContext(false);
export const AuthActionContext = createContext({
	login: () => {},
	logout: () => {},
});

export default function AuthProvider({ children }: PropsWithChildren) {
	const [isLoggedIn, setIsLoggedIn] = useState(true);
	const authAction = {
		login: () => setIsLoggedIn(true),
		logout: () => setIsLoggedIn(false),
	};

	return (
		<AuthContext.Provider value={isLoggedIn}>
			<AuthActionContext.Provider value={authAction}>
				{children}
			</AuthActionContext.Provider>
		</AuthContext.Provider>
	);
}
