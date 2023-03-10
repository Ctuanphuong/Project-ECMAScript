import Header from "@/components/admin/Header";
import Footer from "@/components/admin/Footer";
import { router, useEffect, useState } from "@/utilities";
import { getCategory, updateCategory } from "@/api/category";
const EditCategory = ({ id }) => {
  // get category
  const [category, setCategory] = useState({});
  useEffect(() => {
    getCategory(id)
      .then(({ data }) => setCategory(data))
      .catch((error) => console.error(error));
  }, []);

  //edit category
  useEffect(() => {
    const formEdit = document.querySelector("#form-edit");
    const nameCategory = document.querySelector("#name-cate");
    formEdit.addEventListener("submit", (e) => {
      e.preventDefault();
      const newCategory = {
        id,
        name: nameCategory.value,
      };
      updateCategory(newCategory)
        .then(() => {
          alert("Update Category Successfully!");
          router.navigate("/admin/list-category");
        })
        .catch(({ errors }) => {
          alert("Update Error: " + errors);
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
          <i class="fa-solid fa-pen-to-square"></i> Edit Category
          </h3>
        </div>
        <form id="form-edit">
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
              value="${category.name}"
            />
          </div>
  
          <div class="tw-mt-4">
            <button class="btn btn-success btn-add">Update</button>
          </div>
        </form>
      </div>
    </article>
    <!-- END WRAP ARTICLE -->
    ${Footer()}`;
};

export default EditCategory;
