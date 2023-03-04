import Header from "@/components/admin/Header";
import Footer from "@/components/admin/Footer";
import { router, useEffect, useState } from "@/utilities";
import { getCategories } from "@/api/category";
import { addProject } from "@/api/project";
import axios from "axios";
import UpImage from "@/components/admin/UpImage";
const AddProject = () => {
  //get categories
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategories()
      .then(({ data }) => setCategories(data))
      .catch((error) => console.log(error));
  }, []);

  //ck editor
  useEffect(() => {
    ClassicEditor.create(document.querySelector("#editor")).catch((error) => {
      console.error(error);
    });
  });

  //add project
  useEffect(() => {
    const formAdd = document.querySelector("#form-add");
    const namePro = document.querySelector("#name-pro");
    const linkPro = document.querySelector("#link-pro");
    const catePro = document.querySelector("#cate-pro");
    const shortDes = document.querySelector("#short-des");
    const detailDes = document.querySelector("#editor");
    const imgPro = document.querySelector("#img-pro");
    const datePro = document.querySelector("#date-pro");
    const creator = document.querySelector("#creator");
    const avatarPro = document.querySelector("#avatar-pro");
    formAdd.addEventListener("submit", async (e) => {
      e.preventDefault();
      const images = await UpImage(imgPro.files);
      const avatar = await UpImage(avatarPro.files);
      const project = {
        name: namePro.value,
        link: linkPro.value,
        categoryId: Number(catePro.value),
        shortdes: shortDes.value,
        detaildes: detailDes.value,
        images,
        avatar,
        date: datePro.value,
        creator: creator.value,
      };
      // add project
      addProject(project)
        .then(() => {
          alert("Add Project Successfully");
          router.navigate("/admin/list-project");
        })
        .catch(({ errors }) => {
          alert("Add Project Failure!", errors);
          console.error(errors);
        });
    });
  });

  return /*html*/ `${Header()}
  <!-- WRAP ARTICLE -->
      <article class="tw-pb-10 mt-5">
       <div class="container px-4">
          <div class="tw-my-4">
            <h3 class="text-info tw-font-bold tw-text-xl">
              <i class="fa-solid fa-square-plus tw-mr-1"></i> Add Project
            </h3>
          </div>
          <form id="form-add">
            <div class="form-group">
              <label
                for="name-pro"
                class="tw-block tw-mb-1 tw-mt-2 tw-font-medium"
                >Project's Name</label
              >
              <input
                type="text"
                class="form-control"
                id="name-pro"
                placeholder="Enter Project's name..."
              />
            </div>
            <div class="form-group">
              <label
                for="link-pro"
                class="tw-block tw-mb-1 tw-mt-2 tw-font-medium"
                >Project's Link</label
              >
              <input
                type="text"
                class="form-control"
                id="link-pro"
                placeholder="Enter Project's link..."
              />
            </div>
            <div class="form-group">
              <label
                for="cate-pro"
                class="tw-block tw-mb-1 tw-mt-2 tw-font-medium"
                >Project's Category</label
              >
              <select class="form-control" id="cate-pro">
              <option>Select Category</option>;
              ${categories.map((category) => {
                return `
                <option value="${category.id}">${category.name}</option>`;
              })}
              </select>
            </div>
            <div class="form-group">
              <label
                for="short-des"
                class="tw-block tw-mb-1 tw-mt-2 tw-font-medium"
                >Short Description</label
              >
              <textarea
                class="form-control"
                id="short-des"
                rows="3"
                placeholder="Enter a short description of the project..."
              ></textarea>
            </div>
            <div class="form-group">
              <label
                for="editor"
                class="tw-block tw-mb-1 tw-mt-2 tw-font-medium"
                >Detail Description</label
              >
              <textarea
                class="form-control"
                id="editor"
                rows="3"
                placeholder="Enter detail description of the project..."
              ></textarea>
            </div>
            <div class="form-group">
            <label
              for="avatar-pro"
              class="tw-block tw-mb-1 tw-mt-2 tw-font-medium"
              >Project's Avatar</label
            >
            <input
              type="file"
              class="form-control"
              id="avatar-pro"
            />
          </div>
            <div class="form-group">
              <label
                for="img-pro"
                class="tw-block tw-mb-1 tw-mt-2 tw-font-medium"
                >Project's Images</label
              >
              <input
                type="file"
                class="form-control"
                id="img-pro"
                multiple
              />
            </div>
            <div class="form-group">
              <label
                for="date-pro"
                class="tw-block tw-mb-1 tw-mt-2 tw-font-medium"
                >Completion Date</label
              >
              <input
                type="date"
                class="form-control"
                id="date-pro"
                placeholder="Enter project completion date..."
              />
            </div>
            <div class="form-group">
              <label
                for="creator"
                class="tw-block tw-mb-1 tw-mt-2 tw-font-medium"
                >Creator</label
              >
              <input
                type="text"
                class="form-control"
                id="creator"
                placeholder="Enter the name of the participant who completed the project... "
              />
            </div>
            <div class="tw-mt-4">
              <button class="btn btn-success">Add Project</button>
            </div>
          </form>
        </div>
      </article>
      <!-- END WRAP ARTICLE -->
      ${Footer()}`;
};

export default AddProject;
