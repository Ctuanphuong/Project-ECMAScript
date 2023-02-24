import Header from "@/components/admin/Header";
import Footer from "@/components/admin/Footer";
import { router, useEffect } from "@/utilities";
import { addIntro } from "@/api/intro";
const AddIntro = () => {
  //ck editor
  useEffect(() => {
    ClassicEditor
      .create(document.querySelector('#editor'))
      .catch(error => {
        console.error(error);
      });
  })

  useEffect(() => {
    const formAdd = document.querySelector("#form-add");
    const firstName = document.querySelector("#first-name");
    const lastName = document.querySelector("#last-name");
    const shortIntro = document.querySelector("#editor");
    formAdd.addEventListener("submit", (e) => {
      e.preventDefault();
      const intro = {
        firstname: firstName.value,
        lastname: lastName.value,
        shortintro: shortIntro.value
      };
      // add intro
      addIntro(intro)
        .then(() => router.navigate("/admin/list-intro"))
        .catch((error) => console.error(error));
    });
  });

  return /*html*/ `  
${Header()}
  <!-- WRAP ARTICLE -->
  <article class="tw-pb-10">
    <div class="welcome container tw-my-10 tw-text-center">
      <h1 class="tw-text-4xl tw-text-[#333] tw-font-bold">
        Intro Administrator Page
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
            for="first-name"
            class="tw-block tw-mb-1 tw-mt-2 tw-font-medium"
            >First Name</label
          >
          <input
            type="text"
            class="form-control"
            id="first-name"
            placeholder="Enter your first name..."
          />
        </div>
        <div class="form-group">
          <label
            for="last-name"
            class="tw-block tw-mb-1 tw-mt-2 tw-font-medium"
            >Last Name</label
          >
          <input
            type="text"
            class="form-control"
            id="last-name"
            placeholder="Enter your last name..."
          />
        </div>
        <div class="form-group">
        <label
          for="editor"
          class="tw-block tw-mb-1 tw-mt-2 tw-font-medium"
          >Short Intro</label
        >
        <textarea
          class="form-control"
          id="editor"
          rows="3"
          placeholder="Enter a short intro..."
        ></textarea>
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

export default AddIntro;
