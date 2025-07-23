import { IClient } from "./iclient";
import { IProduct } from "./iproduct";

export interface IBudget {
    products: IProduct[]
    client: IClient
    total: number
}
