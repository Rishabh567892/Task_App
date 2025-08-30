import { createContext, useContext } from "react";

const context = createContext(null);

export const AppProvider = context.Provider;

const useAppContext = () => useContext(context);

export default useAppContext;