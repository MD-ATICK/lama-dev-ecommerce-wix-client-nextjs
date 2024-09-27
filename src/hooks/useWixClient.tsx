"use client"

import { WinClientContext } from "@/context/wixContext"
import { useContext } from "react"

export const useWixClient = () => {
    return useContext(WinClientContext)
}