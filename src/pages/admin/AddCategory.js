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
        .then(() => {
          alert("Add Category Successfully!");
          router.navigate("/admin/list-category");
        })
        .catch(({ errors }) => {
          alert("Add Category Failure! ", errors);
          console.error(errors);
        });
    });
  });
  return /*html*/ `  
${Header()}
  <!-- WRAP ARTICLE -->
  <article class="tw-pb-10 mt-5">
    <div class="container px-4">
      <div class="tw-my-4">
        <h3 class="text-info tw-font-bold tw-text-xl">
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
