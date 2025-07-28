import { postUser } from "../services/AuthService";

export const registerUser = async (user) => {
  const payload = user.toPayload();
  return await postUser(payload);
};
