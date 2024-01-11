import { User } from "@/types/user";
import { PropsWithChildren, createContext, useState } from "react";

const initialUser = {
  id: null,
  createdAt: "",
  name: "",
  email: "",
  imageSource: "",
  authId: "",
};

type UserAction = {
  setUser: (user: User) => void;
};

export const UserContext = createContext<User>(initialUser);
export const UserActionContext = createContext<UserAction>({
  setUser: () => {},
});

export default function UserProvider({ children }: PropsWithChildren) {
  const [user, setUser] = useState<User>(initialUser);

  const userAction = {
    setUser,
  };

  return (
    <UserContext.Provider value={user}>
      <UserActionContext.Provider value={userAction}>
        {children}
      </UserActionContext.Provider>
    </UserContext.Provider>
  );
}
