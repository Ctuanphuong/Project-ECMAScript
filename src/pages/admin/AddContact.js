import Header from "@/components/admin/Header";
import Footer from "@/components/admin/Footer";
import { router, useEffect } from "@/utilities";
import { addContact } from "@/api/contact";
import UpImage from "@/components/admin/UpImage";
const AddContact = () => {
  useEffect(() => {
    const formAdd = document.querySelector("#form-add");
    const headingFirst = document.querySelector("#heading1");
    const headingSecond = document.querySelector("#heading2");
    const headingThird = document.querySelector("#heading3");
    const contentFirst = document.querySelector("#content1");
    const contentSecond = document.querySelector("#content2");
    const contentThird = document.querySelector("#content3");
    const imgFirst = document.querySelector("#img1");
    const imgSecond = document.querySelector("#img2");
    const imgThird = document.querySelector("#img3");
    const mapLink = document.querySelector("#map-link");
    formAdd.addEventListener("submit", async (e) => {
      e.preventDefault();
      const img1 = await UpImage(imgFirst.files);
      const img2 = await UpImage(imgSecond.files);
      const img3 = await UpImage(imgThird.files);
      const contact = {
        heading1: headingFirst.value,
        heading2: headingSecond.value,
        heading3: headingThird.value,
        content1: contentFirst.value,
        content2: contentSecond.value,
        content3: contentThird.value,
        img1,
        img2,
        img3,
        link: mapLink.value,
      };
      // add Category
      addContact(contact)
        .then(() => {
          alert("Add Contact Successfully");
          router.navigate("/admin/list-contact");
        })
        .catch(({ errors }) => {
          alert("Add Contact Failure!", errors);
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
          <i class="fa-solid fa-square-plus tw-mr-1"></i> Add Contact
        </h3>
      </div>
      <form id="form-add">
        <div class="form-group">
          <label
            for="heading1"
            class="tw-block tw-mb-1 tw-mt-2 tw-font-medium"
            >Heading 1</label
          >
          <input
            type="text"
            class="form-control"
            id="heading1"
            placeholder="Enter header..."
          />
        </div>
        <div class="form-group">
        <label
          for="content1"
          class="tw-block tw-mb-1 tw-mt-2 tw-font-medium"
          >Content 1</label
        >
        <input
          type="text"
          class="form-control"
          id="content1"
          placeholder="Enter content..."
        />
      </div>
      <div class="form-group">
      <label
        for="img1"
        class="tw-block tw-mb-1 tw-mt-2 tw-font-medium"
        >Image 1</label
      >
      <input
        type="file"
        class="form-control"
        id="img1"
      />
    </div>
      
      <div class="form-group">
      <label
        for="heading2"
        class="tw-block tw-mb-1 tw-mt-2 tw-font-medium"
        >Heading 2</label
      >
      <input
        type="text"
        class="form-control"
        id="heading2"
        placeholder="Enter header..."
      />
    </div>
    <div class="form-group">
    <label
      for="content2"
      class="tw-block tw-mb-1 tw-mt-2 tw-font-medium"
      >Content 2</label
    >
    <input
      type="text"
      class="form-control"
      id="content2"
      placeholder="Enter content..."
    />
  </div>
  <div class="form-group">
  <label
    for="img2"
    class="tw-block tw-mb-1 tw-mt-2 tw-font-medium"
    >Image 2</label
  >
  <input
    type="file"
    class="form-control"
    id="img2"
  />
</div>
  <div class="form-group">
  <label
    for="heading3"
    class="tw-block tw-mb-1 tw-mt-3 tw-font-medium"
    >Heading 3</label
  >
  <input
    type="text"
    class="form-control"
    id="heading3"
    placeholder="Enter header..."
  />
</div>
<div class="form-group">
<label
  for="content3"
  class="tw-block tw-mb-1 tw-mt-2 tw-font-medium"
  >Content 3</label
>
<input
  type="text"
  class="form-control"
  id="content3"
  placeholder="Enter content..."
/>
</div>
<div class="form-group">
<label
  for="img3"
  class="tw-block tw-mb-1 tw-mt-2 tw-font-medium"
  >Image 3</label
>
<input
  type="file"
  class="form-control"
  id="img3"
/>
</div>
<div class="form-group">
<label
  for="img-contact"
  class="tw-block tw-mb-1 tw-mt-2 tw-font-medium"
  >Address Map's Link</label
>
<input
  type="text"
  class="form-control"
  id="map-link"
  placeholder="Paste link map..."
/>
</div>

        <div class="tw-mt-4">
          <button class="btn btn-success btn-add">Add Contact</button>
        </div>
      </form>
    </div>
  </article>
  <!-- END WRAP ARTICLE -->
  ${Footer()}`;
};

export default AddContact;
