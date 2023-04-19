export type SelectMutationInputData = {
  title: string;
  name: string;
  description: string;
  domain: string;
};

export function selectCreateProjectInput({
  title,
  name,
  description,
  domain,
}: SelectMutationInputData) {
  return {
    project: {
      title,
      name,
      description,
      domain,
    },
  };
}
