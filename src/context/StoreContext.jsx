// Fast refresh only works when a file only exports components. Move your React context(s) to a separate file.
import { createContext } from "react";

const StoreContext = createContext(null);
export default StoreContext;
