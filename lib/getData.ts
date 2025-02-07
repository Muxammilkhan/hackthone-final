import { client } from "@/sanity/lib/client";
import { bannerQuery, bestSellersQuery, productsQuery } from "./query";



export const revalidate = 0;

const getBannerData = async() =>{
    const bannersData = await client.fetch(bannerQuery);
    return bannersData;
};

const getProductData = async() =>{
    const productsData = await client.fetch(productsQuery);
    return productsData;
};



const getBestSellersData = async() =>{
    const bestSellersData = await client.fetch(bestSellersQuery);
    return bestSellersData;
};

export{getBannerData,getProductData,getBestSellersData};