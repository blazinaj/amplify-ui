import {getInput} from "../functions/getInput";
import {useEffect} from "react";

export const useInitialState = (fieldConfig, item, setInput) => {
  /**
   * Sets the initial form state
   */
  const getInitialState = () => {
    const input = getInput(fieldConfig, item);
    setInput({...input})
  };

  /**
   * Sets initial state on first render
   */
  useEffect(() => {
    getInitialState();
  }, []);

  return {
    getInitialState
  }
}
