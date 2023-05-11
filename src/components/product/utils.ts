'use server';

import axios from "axios";

export const getProductbyId = async (id:string) => {
    const data = await axios.get(`https://dummyjson.com/products/${id}`)
    return data.data
}