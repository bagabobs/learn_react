import {createContext, useState} from "react";

export const StatusContext = createContext();

export function StatusProvider( { children } ) {
    const value = useState("set status state");

    return (
        <StatusContext.Provider value={value}>{ children }</StatusContext.Provider>
    );
}
