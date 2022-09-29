// Import CSS thanks to Webpack
import "./index.css";

import { getUsers } from "./api/userApi";

// Populate table of users via API call
getUsers().then((result) => {
  let usersBody = "";

  result.forEach((user) => {
    usersBody += `
    <tr>
      <td>
        <a href='#' class='delete-user' data-user='${user.id}'>Delete</a>
      </td>
      <td>${user.id}</td>
      <td>${user.firstName}</td>
      <td>${user.lastName}</td>
      <td>${user.email}</td>
    </tr>`;
  });

  document.getElementById("users").innerHTML = usersBody;
});
