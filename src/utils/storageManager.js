function getData(key){
    const raw_data = localStorage.getItem(key);
    return JSON.parse(raw_data) || {};
}

function storeData(key, contents){
    localStorage.setItem(key, JSON.stringify(contents));
}

export {getData, storeData}