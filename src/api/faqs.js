import server from "./server";

export const getAllFaqsApi = async ({ storeId }) => {
  const response = await server({ storeId }).get(`/areas`);
  return response.data;
};
