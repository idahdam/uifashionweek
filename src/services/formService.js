import { gatewayHelper } from "../utils";

const postForm = async (data) => {
  const body = {};
  const response = await gatewayHelper.http("POST", "form", body, data);
  return response;
};

export const productService = {
  postForm,
};
