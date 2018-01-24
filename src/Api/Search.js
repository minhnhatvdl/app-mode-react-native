const Search = (key) => {
    let url = `http://localhost/apiAppShop/search.php?key=${key}`;
    return fetch(url).then(res => res.json());
};
export default Search;