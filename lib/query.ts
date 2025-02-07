import { groq } from "next-sanity";

const bannerQuery = groq`*[_type == 'banner']{
 ... 
}|order(_createAt asc)`;

const productsQuery = groq`*[_type == 'product']{
 ... 
}|order(_createAt asc)`;

const bestSellersQuery = groq`*[_type == 'product' && position == 'Bestsellers']{
 ... 
}|order(_createAt asc)`;

export{bannerQuery,productsQuery,bestSellersQuery}