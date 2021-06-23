import { createContext, useState } from "react";

export const userContext = createContext({ id: 0, setId: () => { } })

export const UserProvider = ({ children }) => {
    const [id, setId] = useState(0);
    const value = { id, setId };
    return (
        <userContext.Provider value={value}>
            {children}
        </userContext.Provider>
    )
}