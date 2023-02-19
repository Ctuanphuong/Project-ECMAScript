import Header from "@/components/admin/Header";
import Footer from "@/components/admin/Footer";
import { useEffect, useState } from "@/utilities";
import { removeCategory, getCategories } from "@/api/category";
const ListCategory = () => {
  //get all categories
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategories()
      .then(({ data }) => setCategories(data))
      .catch((error) => console.error(error));
  }, []);

  //delete category
  useEffect(() => {
    const btns = document.querySelectorAll(".btn-remove");
    for (let btn of btns) {
      btn.addEventListener("click", function () {
        const id = this.dataset.id;
        const confirmDel = window.confirm(
          "Are you sure you want to delete this category?"
        );
        if (confirmDel) {
          removeCategory(id);
        }
      });
    }
  });
  return /*html*/ `
  ${Header()}
   <!-- WRAP ARTICLE -->
  <article class="tw-pb-10">
    <div class="welcome container tw-my-10 tw-text-center">
      <h1 class="tw-text-4xl tw-text-[#333] tw-font-bold">
        Category Administrator Page
      </h1>
    </div>
    <div class="container">
      <div class="tw-my-4">
        <h3 class="tw-text-[#fdb63c] tw-font-bold tw-text-xl">
          <i class="fa-solid fa-list tw-mr-2"></i>List Category
        </h3>
      </div>
    </div>
    <div class="tw-py-5">
      <table class="table container">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Operation</th>
          </tr>
        </thead>
        <tbody>
          
          ${categories
            .map((category, index) => {
              return `<tr>
            <th scope="row">${index + 1}</th>
            <td>${category.name}</td>
            <td>
              <a href="#" class="btn btn-danger btn-remove" data-id="${
                category.id
              }">
              <i class="fa-solid fa-trash"></i></a>
              <a href="/admin/edit-category/${
                category.id
              }" class="btn btn-warning"
                ><i class="fa-solid fa-pen-to-square"></i
              ></a>
            </td>
          </tr>`;
            })
            .join("")}
          
        </tbody>
      </table>
    </div>
  </article>
  <!-- END WRAP ARTICLE -->
  ${Footer()}`;
};

export default ListCategory;
