export default function handleResponseFromAPI(promise) {
  return promise
    .then((_result) => {
      console.log('Got a response from the API');
      return { status: 200, body: 'success' };
    })
    .catch((_error) => {
      console.error('Got an error from the API');
      return new Error();
    });
}
