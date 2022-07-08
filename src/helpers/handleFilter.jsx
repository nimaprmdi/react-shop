const filterDatasByCats = (datas, cat) => {
    return datas && datas.length > 0 && datas.filter((data) => data.category.includes(cat));
};

const filterDatasById = (datas, ids) => {
    return datas && datas.length > 0 && datas.filter((data) => ids.includes(data.id));
};

const findDataById = (datas, id) => {
    return datas.find((data) => data.id === id);
};

const getFeaturedProducts = (datas, featured) => {
    return datas && datas.length > 0 && datas.filter((data) => data.products.items.id.includes(featured));
};

const sortDataAtoZ = (datas) => {
    return datas && datas.length > 0 && datas.sort((data, b) => data.name.localeCompare(b.name));
};

const sortDataZtoA = (datas) => {
    return datas && datas.length > 0 && datas.sort((data, b) => data.name.localeCompare(b.name)).reverse();
};

const shuffleData = (datas) => {
    return datas.sort((a, b) => 0.5 - Math.random());
};

const getStarRating = (stars) => {
    return "✮✮✮✮✮✩✩✩✩✩".slice(5 - stars, 10 - stars);
};

const deleteData = (datas, removedData) => {
    return datas.filter((data) => data.id !== removedData.id);
};

const handleSorting = (sorting, data) => {
    switch (sorting) {
        case "a-to-z":
            return data && data.length > 0 && sortDataAtoZ(data);
            break;
        case "z-to-a":
            return data && data.length > 0 && sortDataZtoA(data);
            break;
        case "featured":
            return data && data.length > 0 && sortDataZtoA(data);
            break;
        case "random":
            return data && data.length > 0 && shuffleData(data);
            break;
        case "all":
            return data && data.length > 0 && data;
            break;
        default:
            return data && data.length > 0 && data;
    }
};

const getAllTags = (datas) => {
    let tags = [];
    datas.filter((data) => {
        data.tags.map((tag) => {
            if (!tags.includes(tag)) {
                tags.push(tag);
            }
        });
    });

    return tags;
};

export {
    filterDatasByCats,
    filterDatasById,
    findDataById,
    getFeaturedProducts,
    sortDataAtoZ,
    sortDataZtoA,
    shuffleData,
    getStarRating,
    deleteData,
    handleSorting,
    getAllTags,
};
