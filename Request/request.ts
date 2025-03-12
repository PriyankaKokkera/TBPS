export async function getLAllCatogory(){
    const catogoryRes=await fetch(
       "https://fakestoreapi.com/products/categories"
    );
    return catogoryRes.json();
} 
export const getAllProduct = async () => {
    const ProductsRes = await fetch('https://fakestoreapi.com/products');
    
    return ProductsRes.json();
};
export const getSingleProduct = async (id:string) => {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    const singleProductRes = await res.json();
    return singleProductRes;
};
// export const getProductByCategory = async (category:string) => {
//     const ProductByCategoryRes = await fetch(`https://fakestoreapi.com/products/category/${category}`);
   
//     return ProductByCategoryRes.json();
// };
export const getProductByCategory = async (category:string) => {
    const res = await fetch(`https://fakestoreapi.com/products/category/${category}`);
    const ProductByCategoryRes = await res.json();
    return ProductByCategoryRes;
};