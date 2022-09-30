// Import CSS thanks to Webpack
import "./index.css";

import { getUsers, deleteUser } from "./api/userApi";

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
  document.querySelectorAll(".delete-user").forEach((el) => {
    el.addEventListener("click", (e) => {
      // Avoid changing the URL
      e.preventDefault();

      // Remove the user
      const id = e.target.getAttribute("data-user");
      deleteUser(id);

      // Clean up that user on the UI
      const currentTR = e.target.parentNode.parentNode;
      document.getElementById("users").removeChild(currentTR);
    });
  });
});
