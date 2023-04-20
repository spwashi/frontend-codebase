import { useSelector } from "react-redux";
import { selectPossibleSceneOptions } from "../services/redux/selectors";

export function useSceneOptions() {
  return useSelector(selectPossibleSceneOptions);
}
