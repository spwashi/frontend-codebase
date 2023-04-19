export type SelectMutationInputData = {
  id: string;
  title: string;
  description?: string;
};
export function selectEditSceneInput(data: SelectMutationInputData) {
  const { id, description, title } = data ?? {};

  return {
    id,
    description,
    title,
  };
}
