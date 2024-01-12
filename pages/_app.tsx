import type { AppProps } from "next/app";
import AuthProvider from "@/providers/AuthProvider";
import UserProvider from "@/providers/UserProvider";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <UserProvider>
        <Component {...pageProps} />;
      </UserProvider>
    </AuthProvider>
  );
}
