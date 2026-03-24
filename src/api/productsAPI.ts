import axiosClient, {request} from "./axiosClient";
import { IProducts } from "../common/Iproduct";

export const getProducts = async() => {
  return axiosClient.get("/products") as unknown as IProducts;
//   return await request.get<IProducts>("/products");
};
