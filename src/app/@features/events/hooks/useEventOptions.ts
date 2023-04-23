import { useSelector } from "react-redux";
import { selectPossibleEventOptions } from "../services/redux/selectors";

export function useEventOptions() {
  return useSelector(selectPossibleEventOptions);
}
