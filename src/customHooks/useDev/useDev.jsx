import {useContext} from "react";
import devContext from "./devContext";

export const useDev = () => {
  return useContext(devContext);
}

