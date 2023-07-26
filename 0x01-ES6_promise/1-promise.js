export default function getFullResponseFromAPI(message) {
    return new Promise((resolve, reject) => {
        if (message == "true") {
            resolve({status: 200, body: 'Success'});
        } else {
            reject(new Error('The fake API is not working currently'));
        }
    });
};