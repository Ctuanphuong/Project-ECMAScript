import Header from "@/components/admin/Header";
import Footer from "@/components/admin/Footer";
import { router, useEffect, useState } from "@/utilities";
import { getIntro, updateIntro } from "@/api/intro";

const EditIntro = ({ id }) => {
  // get intro
  const [intro, setIntro] = useState({});
  useEffect(() => {
    getIntro(id)
      .then(({ data }) => setIntro(data))
      .catch((error) => console.error(error));
  }, []);

  //ck editor
  useEffect(() => {
    ClassicEditor.create(document.querySelector("#editor")).catch((error) => {
      console.error(error);
    });
  });
  //edit intro
  useEffect(() => {
    const formUpdate = document.querySelector("#form-update");
    const firstName = document.querySelector("#first-name");
    const lastName = document.querySelector("#last-name");
    const shortIntro = document.querySelector("#editor");
    formUpdate.addEventListener("submit", (e) => {
      e.preventDefault();
      const newIntro = {
        id,
        firstname: firstName.value,
        lastname: lastName.value,
        shortintro: shortIntro.value,
      };
      updateIntro(newIntro)
        .then(() => {
          alert("Update Intro Successfully");
          router.navigate("/admin/list-intro");
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
          <i class="fa-solid fa-pen-to-square"></i> Edit Intro
          </h3>
        </div>
        <form id="form-update">
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
              value="${intro.firstname}"
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
            placeholder="Enter your first name..."
            value="${intro.lastname}"
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
        >${intro.shortintro}</textarea>
      </div>
          <div class="tw-mt-4">
            <button class="btn btn-success">Update</button>
          </div>
        </form>
      </div>    
    </article>
    <!-- END WRAP ARTICLE -->
    ${Footer()}`;
};

export default EditIntro;
