import api from './externalAPI';

export async function getQRCode(name) {
  const response = await api.get(`https://chart.googleapis.com/chart?chs=150x150&cht=qr&chl=http://localhost:3000/${name}`);
  return response.data;
}