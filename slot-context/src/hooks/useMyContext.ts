import { useContext } from "react";
import { MyContext } from "../context/MyCOntext";

export const useMyContext = () => {
    const context = useContext(MyContext);

    if (!context) {
        throw new Error("useMyContext must be used within MyContext Provider");
    }

    return context
}