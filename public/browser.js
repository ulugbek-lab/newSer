// const { response } = require("../app");

console.log("Frontend js is running here");

function itemTemplate(item) {
  return `<li
          class="list-group-item list-group-item-info d-flex align-items-center justify-content-between"
        >
          <span class="items-text">${item.reja} </span>
          <div>
            <button data-id="${item._id}" class="edit-me btn btn-secondary btn-sm mr-1">
              Change
            </button>
            <button data-id="${item._id}" class="delete-me btn btn-danger btn-sm">Delete</button>
          </div>
        </li>`;
}

let createField = document.getElementById("create-field");

document.getElementById("create-form").addEventListener("submit", function (e) {
  e.preventDefault();
  //   axios.get("/").then((data) => {
  //     console.log(data);
  //   });

  axios
    .post("/create-item", { reja: createField.value })
    .then((response) => {
      console.log(response);
      document
        .getElementById("items-list")
        .insertAdjacentHTML("beforeend", itemTemplate(response.data));
      createField.value = "";
      createField.focus();
    })
    .catch((err) => {
      console.log("try again!");
    });
});

document.addEventListener("click", function (e) {
  //delete operations
  console.log(e.target);
  if (e.target.classList.contains("delete-me")) {
    if (confirm("Are you sure to delete")) {
      axios
        .post("/delete-item", { id: e.target.getAttribute("data-id") })
        .then((response) => {
          console.log(response.data);
          e.target.parentElement.parentElement.remove();
        })
        .catch((err) => {
          console.log("pls try again");
        });
    }
  }
  //edit operations
  if (e.target.classList.contains("edit-me")) {
    alert("are u sure to edit");
  }
});
