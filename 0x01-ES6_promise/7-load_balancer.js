export default async function loadBalancer(chinaDownload, USDownload) {
  try {
    const response = await Promise.race([chinaDownload, USDownload]);
    return { value: response };
  } catch (error) {
    console.error('Error occurred:', error);
    throw error;
  }
}
