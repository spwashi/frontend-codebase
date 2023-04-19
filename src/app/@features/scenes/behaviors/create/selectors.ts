export type SelectMutationInputData = {
  name: string;
  title: string;
  description: string;
};
export function selectCreateSceneInput(data: SelectMutationInputData) {
  const { name, title, description } = data ?? {};

  return {
    description,
    title,
    name,
  };
}
