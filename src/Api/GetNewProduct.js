const GetNewProduct = (home = true, page = 1) => {
    let url = `http://localhost/apiAppShop/get_new_product.php?page=${page}&home=${home}`;
    return fetch(url).then(res => res.json());
};
export default GetNewProduct;