function getResponseFromAPI() {
    return new Promise((resolve, reject) => {
        let gold = 'good';
        if (gold == 'good') {
            resolve();
        }
        else {
            reject();
        }
    });
};

export default getResponseFromAPI;