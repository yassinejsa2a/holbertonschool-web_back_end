import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const results = await Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ]);
  const res = [];
  results.forEach((element) => {
    res.push({
      status: element.status,
      value: element.value || String(element.reason),
    });
  });

  return res;
}