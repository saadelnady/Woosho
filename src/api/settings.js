import server from "./server";

export const getAllSettingsApi = async (cookies = {}) => {
  const response = await server({ cookies }).get(`/settings/siteInfo`);

  return response.data;
};
