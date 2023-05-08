import { api } from "./Connection";

export function getTotalVendas(data = {}) {
  const postApi = api
    .get("")
    .then((response: any) => response)
    .catch((error: any) => console.log(error));
  return postApi;
}
