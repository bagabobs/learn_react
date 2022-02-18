import {createContext, useEffect, useState} from "react";

export const UserContext = createContext();

function fetchUser() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve( { id: 2, name: 'Bagabobs' } );
        }, 1000);
    });
};

export function UserProvider( { children } ) {
    const [ user, setUser ] = useState({ name: "..." });

    useEffect(() => {
        fetchUser().then(user => (
            setUser(user)
        ));
    }, []);

    return <UserContext.Provider value={user}>{children}</UserContext.Provider> ;
}
