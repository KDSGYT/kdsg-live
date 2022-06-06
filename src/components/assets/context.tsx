import { createContext } from "react";


export interface DarkmodeContextInterface {
    isDark?:boolean,
    setIsDark?:Function
}
const DarKModeContext = createContext({})
export default DarKModeContext;