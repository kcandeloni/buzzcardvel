import api from "../api";

export async function postNewCardPage(params) {
  const response = await api.post("create", { ...params });
  return response;
}
