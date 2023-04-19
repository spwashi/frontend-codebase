import { useSelector } from "react-redux";
import { selectPossibleEventsList } from "../services/redux/selectors";

export function useEventOptions() {
  return useSelector(selectPossibleEventsList);
}
