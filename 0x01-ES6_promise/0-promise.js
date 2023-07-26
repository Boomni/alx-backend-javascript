export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    const gold = 'good';
    if (gold === 'good') {
      resolve();
    } else {
      reject();
    }
  });
}