import getBaseUrl from "./baseUrl";

const baseUrl = getBaseUrl();

export const getUsers = () => {
  return get("users");
};

export const deleteUser = (id) => {
  return del(`users/${id}`);
};

const get = (url) => {
  return fetch(baseUrl + url)
    .then(onSuccess)
    .then((data) => data)
    .catch(onError);
};

const del = (url) => {
  return fetch(baseUrl + url, {
    method: "DELETE",
  })
    .then(onSuccess)
    .then(onError);
};

const onSuccess = (res) => res.json();

const onError = (err) => console.log(err); // eslint-disable-line no-console
