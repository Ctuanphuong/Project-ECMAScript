import Header from "@/components/admin/Header";
import Footer from "@/components/admin/Footer";
import { router, useEffect, useState } from "@/utilities";
import { getCategories } from "@/api/category";
import { getProject, updateProject } from "@/api/project";
import axios from "axios";
const EditProject = ({ id }) => {
  //Get data categories
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategories()
      .then(({ data }) => setCategories(data))
      .catch((error) => console.log(error));
  }, []);

  //get data projects
  const [project, setProject] = useState({});

  useEffect(() => {
    getProject(id).then(({ data }) => setProject(data));
  }, []);

  //edit project
  useEffect(() => {
    const formEdit = document.querySelector("#form-edit");
    const namePro = document.querySelector("#name-pro");
    const linkPro = document.querySelector("#link-pro");
    const catePro = document.querySelector("#cate-pro");
    const shortDes = document.querySelector("#short-des");
    const detailDes = document.querySelector("#detail-des");
    const imgPro = document.querySelector("#img-pro");
    const datePro = document.querySelector("#date-pro");
    const creator = document.querySelector("#creator");
    const avatarPro = document.querySelector("#avatar-pro");
    formEdit.addEventListener("submit", async (e) => {
      e.preventDefault();

      //get images
      let images = [];
      images =
        imgPro.files.length > 0
          ? await updateImages(imgPro.files)
          : imgPro.accept.split(",");
      // const images = await updateImages(getImgPro);

      //get avatar
      let avatar = "";
      avatar =
        avatarPro.files.length == 0
          ? avatarPro.accept
          : await updateImages(avatarPro.files);

      //lấy dữ liệu mới cập nhật
      const newProject = {
        id,
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

      //update project
      updateProject(newProject)
        .then(() => router.navigate("/admin/list-project"))
        .catch(() => console.error("Error!"));
    });
  });

  // upload nhiều ảnh
  const updateImages = async (files) => {
    if (files) {
      const CLOUD_NAME = "phuong-fpoly";
      const PRESET_NAME = "upload-portfolio";
      const urls = [];
      const FOLDER_NAME = "Ass-ECMA";
      const api = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`;
      //khởi tạo đối tượng xử lí biểu mẫu upload ảnh
      const formData = new FormData();
      formData.append("upload_preset", PRESET_NAME);
      formData.append("folder", FOLDER_NAME);

      for (const file of files) {
        formData.append("file", file);

        const response = await axios.post(api, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        urls.push(response.data.secure_url);
      }
      if (urls.length == 1) {
        return urls[0];
      } else {
        return urls;
      }
    }
  };

  return /*html*/ ` ${Header()}
  <!-- WRAP ARTICLE -->
      <article class="tw-pb-10">
        <div class="welcome container tw-my-10 tw-text-center">
          <h1 class="tw-text-4xl tw-text-[#333] tw-font-bold">
            Project Administrator Page
          </h1>
        </div>
        <div class="container">
          <div class="tw-my-4">
            <h3 class="tw-text-[#fdb63c] tw-font-bold tw-text-xl">
            <i class="fa-solid fa-pen-to-square"></i> Edit Project
            </h3>
          </div>
          <form id="form-edit">
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
                value="${project.name}"
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
                value="${project.link}"
              />
            </div>
            <div class="form-group">
              <label
                for="cate-pro"
                class="tw-block tw-mb-1 tw-mt-2 tw-font-medium"
                >Project's Category</label
              >
              <select class="form-control" id="cate-pro">
              <option>Seclect Category</option>
              ${categories.map((category) => {
    if (project.categoryId == category.id) {
      return /*html*/ `
                <option value="${category.id}" selected>${category.name}</option>`;
    } else {
      return /*html*/ `
                <option value="${category.id}">${category.name}</option>`;
    }
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
              >${project.shortdes}</textarea>
            </div>
            <div class="form-group">
              <label
                for="detail-des"
                class="tw-block tw-mb-1 tw-mt-2 tw-font-medium"
                >Detail Description</label
              >
              <textarea
                class="form-control"
                id="detail-des"
                rows="3"
                placeholder="Enter detail description of the project..."
              >${project.detaildes}</textarea>
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
              accept ="${project.avatar}"
            />
            <img src="${project.avatar
    }" class="tw-w-[100px] tw-h-[100px] tw-my-2 tw-border tw-border-[#ccc] tw-rounded" >
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
                accept= "${project.images}"
                multiple
              />
            </div>
            <div class="tw-flex"> 
    ${project.images?.map(img => {
      return /*html*/ `<img src="${img}" class="tw-w-[70px] tw-h-[70px] tw-mx-2 tw-my-2 tw-rounded">`;
    }).join("")}
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
                value="${project.date}"
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
                value="${project.creator}"
              />
            </div>
            <div class="tw-mt-4">
              <button class="btn btn-success">Update Project</button>
            </div>
          </form>
        </div>
      </article>
      <!-- END WRAP ARTICLE -->
      ${Footer()}`;
};

export default EditProject;
