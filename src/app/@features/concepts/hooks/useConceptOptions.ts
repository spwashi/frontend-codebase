import { useSelector } from "react-redux";
import { selectPossibleConceptOptions } from "../services/redux/selectors";

export function useConceptOptions() {
  return useSelector(selectPossibleConceptOptions);
}
