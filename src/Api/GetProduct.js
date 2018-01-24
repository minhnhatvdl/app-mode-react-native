const GetProduct = (productId = 1) => {
    let url = `http://localhost/apiAppShop/product_by_id.php?productId=${productId}`;
    return fetch(url).then(res => res.json());
};
export default GetProduct;