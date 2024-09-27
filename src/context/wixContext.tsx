"use client"
import { createClient, OAuthStrategy } from "@wix/sdk";
import { collections, products } from '@wix/stores';
import Cookies from 'js-cookie';
import { createContext, ReactNode } from "react";

const refreshToken = JSON.parse(Cookies.get('refreshToken') || "{}")

const myWixClient = createClient({
    modules: {
        products,
        collections,
    },
    auth: OAuthStrategy({
        clientId: process.env.NEXT_PUBLIC_WIX_CLIENT!,
        tokens: {
            refreshToken,
            accessToken: { value: '', expiresAt: 0 }
        },
    }),
});
export type wixClient = typeof myWixClient
export const WinClientContext = createContext<wixClient>(myWixClient)


export const WinClientContextProvider = ({ children }: { children: ReactNode }) => {
    return <WinClientContext.Provider value={myWixClient}>
        {children}
    </WinClientContext.Provider>
}