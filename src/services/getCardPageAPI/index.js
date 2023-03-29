import api from "../api";

export async function getCardPage(name) {
  const response = api.get(`${name}`);
  return response;
}
