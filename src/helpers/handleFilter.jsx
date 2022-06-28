const filterDatasByTag = (datas, tag) => {
    return datas.filter((data) => data.tags.includes(tag));
};

const filterDatasById = (datas, ids) => {
    return datas.filter((data) => ids.includes(data.id));
};

const findDataById = (datas, id) => {
    return datas.find((data) => data.id === id);
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

export { filterDatasByTag, filterDatasById, findDataById, getAllTags };
