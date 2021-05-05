export const BASE_URL = "http://localhost:3001";
const RESPONSE_ERROR_STATUS_NOT_OK = "Response was not OK";

export function handleResponse(response) {
  if (response.ok) return response.json();
  throw new Error(RESPONSE_ERROR_STATUS_NOT_OK);
}

export function handleError(error) {
  throw error;
}