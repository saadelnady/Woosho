import server from "./server";
export const getSectionDataApi = async ({ cookies, pageSlug, sectionSlug }) => {
  const response = await server({ cookies }).get(
    `/pages/${pageSlug}/sections/${sectionSlug}`
  );
  return response.data;
};

export const getPageDataApi = async ({ cookies = {}, pageSlug }) => {
  const response = await server({ cookies }).get(`/pages/${pageSlug}`);

  return response.data;
};
