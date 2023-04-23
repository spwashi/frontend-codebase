import { useSelector } from "react-redux";
import { selectPossibleProjectOptions } from "../services/redux/selectors";

export function useProjectOptions() {
  return useSelector(selectPossibleProjectOptions);
}
