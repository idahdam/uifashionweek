import { gatewayHelper } from "../utils";

const getAllBlog = async () => {
  const body = {};
  const response = await gatewayHelper.http("GET", "blogs", body);
  return response;
};

async function getBlogById(id) {
  const body = {};
  const response = await gatewayHelper.http("GET", "blogs/" + id, body);
  return response;
}

export const blogService = {
  getAllBlog,
  getBlogById,
};
