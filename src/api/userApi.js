export const getUsers = () => {
  return get("users");
};

const get = (url) => {
  return fetch(url)
    .then(onSuccess)
    .then((data) => data)
    .catch(onError);
};

const onSuccess = (res) => res.json();

const onError = (err) => console.log(err); // eslint-disable-line no-console
