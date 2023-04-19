import { useSelector } from "react-redux";
import { selectPossibleTagsList } from "../services/redux/selectors";

export function useTagOptions() {
  return useSelector(selectPossibleTagsList);
}
