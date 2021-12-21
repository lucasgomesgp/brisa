import { createContext, useState } from "react";

export const ModalContext = createContext({});

export default function ModalContextProvider({ children }) {
    const [modalToggle, setModalToggle] = useState(false);

    const bodyRef = document.getElementsByTagName("body")[0];
    function toggleModal() {
        if (!modalToggle) {
            bodyRef.style.overflow = "hidden";
        } else {
            bodyRef.style.overflow = "initial";
        }
        setModalToggle(!modalToggle);
    }
    
    return (
        <ModalContext.Provider value={{ modalToggle, setModalToggle, toggleModal }}>
            {children}
        </ModalContext.Provider>
    );
}