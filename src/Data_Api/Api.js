import axios from "axios";

export const Api = async () => {
    const res = await axios.get("https://fakestoreapi.com/products");
    return res.data;
}