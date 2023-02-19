import Header from "@/components/admin/Header";
import Footer from "@/components/admin/Footer";
import { router, useEffect } from "@/utilities";
import { addCategory } from "@/api/category";
const AddCategory = () => {
  useEffect(() => {
    const formAdd = document.querySelector("#form-add");
    const nameCate = document.querySelector("#name-cate");
    formAdd.addEventListener("submit", (e) => {
      e.preventDefault();
      const category = {
        name: nameCate.value,
      };
      // add Category
      addCategory(category)
        .then(() => router.navigate("/admin/list-category"))
        .catch((error) => console.error(error));
    });
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
          <i class="fa-solid fa-square-plus tw-mr-1"></i> Add Category
        </h3>
      </div>
      <form id="form-add">
        <div class="form-group">
          <label
            for="name-cate"
            class="tw-block tw-mb-1 tw-mt-2 tw-font-medium"
            >Category's Name</label
          >
          <input
            type="text"
            class="form-control"
            id="name-cate"
            placeholder="Enter Category's name..."
          />
        </div>

        <div class="tw-mt-4">
          <button class="btn btn-success btn-add">Add Category</button>
        </div>
      </form>
    </div>
  </article>
  <!-- END WRAP ARTICLE -->
  ${Footer()}`;
};

export default AddCategory;
