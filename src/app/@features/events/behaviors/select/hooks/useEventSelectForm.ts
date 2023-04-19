import { useState } from "react";

export function useEventSelectForm() {
  const [{ data: { event } = {} as any } = {} as any, setEventFromForm] =
    useState({} as any);
  return [event, setEventFromForm] as const;
}
