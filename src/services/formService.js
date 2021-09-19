import { gatewayHelper } from "../utils";

const postForm = async () => {
  const body = {};
  const response = await gatewayHelper.http("POST", "form", body);
  return response;
};

export const productService = {
  postForm,
};
