import { useSelector } from "react-redux";
import { selectPossibleTagOptions } from "../services/redux/selectors";

export function useTagOptions() {
  return useSelector(selectPossibleTagOptions);
}
