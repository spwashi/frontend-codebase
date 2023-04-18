export function selectMutationInput(data: any) {
  const {name, username, password, passwordConfirm, project} = data ?? {};
  return {
    user:     {name, username},
    password: {password, passwordConfirm},
    project:  {id: project.id},
  };
}