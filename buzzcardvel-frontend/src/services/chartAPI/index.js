import api from './externalAPI';

export async function getQRCode(urlCardPage) {
  const response = await api.get("https://chart.googleapis.com/chart?chs=150x150&cht=qr&chl=" + `${urlCardPage}`);
  return response.data;
}