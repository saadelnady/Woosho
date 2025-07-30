import server from "./server";

export const getAllSocialsApi = async (cookies = {}) => {
  const response = await server({ cookies }).get(`/settings/socials`);

  return response.data;
};
