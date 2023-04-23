export function selectLoginInput(data: any) {
  const {
    user: userStringOrObj,
    username: stringUsername,
    password,
    project,
  } = data ?? {};
  const username =
    typeof userStringOrObj === "string"
      ? userStringOrObj
      : userStringOrObj.username;
  return {
    user: { username: username ?? stringUsername },
    password: { password },
    project: { id: project.id },
  };
}
