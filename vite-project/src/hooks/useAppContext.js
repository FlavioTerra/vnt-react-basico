import { useContext } from "react";
import { AppContext } from "../contexts";

const useAppContext = () => {
  const context = useContext(AppContext);

  return context;
}

export { useAppContext };