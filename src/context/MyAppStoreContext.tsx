import { createContext } from "react";
import type { AppContextType } from "../types/globalTypes";

export const MyAppStoreContext = createContext<AppContextType | null>(null);
