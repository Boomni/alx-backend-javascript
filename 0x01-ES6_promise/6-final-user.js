import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const promise = await Promise.all([signUpUser(firstName, lastName), uploadPhoto(fileName)]);
  return new Promise((resolve) => {
    resolve([
      {
        status: `${promise.status}`,
        value: `${promise.body}`,
      },
    ]);
  });
}
