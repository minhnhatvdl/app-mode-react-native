const GetListProduct = (categoryId = 1, page = 1) => {
    let url;
    if (categoryId !== 'collection') {
        url = `http://localhost/apiAppShop/product_by_type.php?categoryId=${categoryId}&page=${page}`;
    } else {
        url = `http://localhost/apiAppShop/get_collection.php?page=${page}`;
    }
    return fetch(url).then(res => res.json());
};
export default GetListProduct;