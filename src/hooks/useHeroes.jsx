import { createContext, useState } from "react";

export const HeroesContext = createContext({});

export default function HeroesContextProvider({ children }) {
    const [comics, setComics] = useState();

    return (
        <HeroesContext.Provider value={{ comics, setComics }}>
            {children}
        </HeroesContext.Provider>
    );
}