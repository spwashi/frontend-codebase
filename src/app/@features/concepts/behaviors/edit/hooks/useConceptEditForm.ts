import { useState } from "react";

export function useConceptEditForm() {
  const [
    { data: { concept: concept } = {} as any } = {} as any,
    setConceptSelectionFormData,
  ] = useState({} as any);
  return [concept, setConceptSelectionFormData];
}
