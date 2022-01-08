import { gatewayHelper } from "../utils";

const getCounters = async () => {
  const body = {};
  const response = await gatewayHelper.http("GET", "ticketings", body);
  return response;
};

export const ticketCounterService = {
  getCounters,
};
