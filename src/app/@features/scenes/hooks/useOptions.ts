import { useSelector } from "react-redux";
import { selectPossibleScenesList } from "../services/redux/selectors";

export function useSceneOptions() {
  return useSelector(selectPossibleScenesList);
}
