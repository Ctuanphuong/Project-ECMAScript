import Header from "@/components/admin/Header";
import Footer from "@/components/admin/Footer";
import { getCategories } from "@/api/category";
import { router, useEffect, useState } from "@/utilities";
import { getBlog, updateBlog } from "@/api/blog";
const EditBlog = ({ id }) => {
  //Get data categories
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategories()
      .then(({ data }) => setCategories(data))
      .catch((error) => console.log(error));
  }, []);
  // get data blogs
  const [blog, setBlog] = useState({});
  useEffect(() => {
    getBlog(id)
      .then(({ data }) => setBlog(data))
      .catch((error) => console.error(error));
  }, []);
  //edit blog
  useEffect(() => {
    const formUpdate = document.querySelector("#form-update");
    const titleBlog = document.querySelector("#title-blog");
    const cateBlog = document.querySelector("#cate-blog");
    const shortContent = document.querySelector("#short-content");
    const longContent = document.querySelector("#long-content");
    const avatarBlog = document.querySelector("#avatar-blog");
    const imgBlog = document.querySelector("#img-blog");
    const dateBlog = document.querySelector("#date-blog");
    formUpdate.addEventListener("submit", (e) => {
      e.preventDefault();
      const newBlog = {
        id,
        title: titleBlog.value,
        categoryId: Number(cateBlog.value),
        shortcontent: shortContent.value,
        longcontent: longContent.value,
        avatar: avatarBlog.value,
        images: imgBlog.value,
        date: dateBlog.value,
      };
      //update blog
      updateBlog(newBlog)
        .then(() => router.navigate("/admin/list-blog"))
        .catch((error) => console.error(error));
    });
  });
  return /*html*/ `
  ${Header()}
  <article class="tw-pb-10">
    <div class="welcome container tw-my-10 tw-text-center">
      <h1 class="tw-text-4xl tw-text-[#333] tw-font-bold">
        Blog Administrator Page
      </h1>
    </div>
    <div class="container">
      <div class="tw-my-4">
        <h3 class="tw-text-[#fdb63c] tw-font-bold tw-text-xl">
          <i class="fa-solid fa-square-plus tw-mr-1"></i> Add Blog
        </h3>
      </div>
      <form id="form-update">
        <div class="form-group">
          <label
            for="title-blog"
            class="tw-block tw-mb-1 tw-mt-2 tw-font-medium"
            >Blog's Tittle</label
          >
          <input
            type="text"
            class="form-control"
            id="title-blog"
            placeholder="Enter Blog's title..."
            value="${blog.title}"
          />
        </div>
        <div class="form-group">
          <label
            for="cate-blog"
            class="tw-block tw-mb-1 tw-mt-2 tw-font-medium"
            >Blog's Category</label
          >
          <select class="form-control" id="cate-blog">
          ${categories.map((category) => {
            return /*html*/ `
            <option value="${category.id}">${category.name}</option>`;
          })}
          </select>
        </div>
        <div class="form-group">
          <label
            for="short-content"
            class="tw-block tw-mb-1 tw-mt-2 tw-font-medium"
            >Short Content</label
          >
          <textarea
            class="form-control"
            id="short-content"
            rows="3"
            placeholder="Enter a short content of the blog..."
          >${blog.shortcontent}</textarea>
        </div>
        <div class="form-group">
          <label
            for="long-content"
            class="tw-block tw-mb-1 tw-mt-2 tw-font-medium"
            >Long content</label
          >
          <textarea
            class="form-control"
            id="long-content"
            rows="3"
            placeholder="Enter long content of the blog..."
          >${blog.longcontent}</textarea>
        </div>
        <div class="form-group">
          <label
            for="avatar-blog"
            class="tw-block tw-mb-1 tw-mt-2 tw-font-medium"
            >Blog's Avatar</label
          >
          <input
            type="file"
            class="form-control"
            id="avatar-blog"
          />
        </div>
        <img src="${blog.avatar}">
        <div class="form-group">
        <label
          for="img-blog"
          class="tw-block tw-mb-1 tw-mt-2 tw-font-medium"
          >Blog's Images</label
        >
        <input
          type="file"
          class="form-control"
          id="img-blog"
          multiple="true"
        />
        <img src="${blog.images}">
      </div>
        <div class="form-group">
          <label
            for="date-blog"
            class="tw-block tw-mb-1 tw-mt-2 tw-font-medium"
            >Post Date</label
          >
          <input
            type="date"
            class="form-control"
            id="date-blog"
            value="${blog.date}"
          />
        </div>
        <div class="tw-mt-4">
          <button class="btn btn-success btn-update">Update Blog</button>
        </div>
      </form>
    </div>
  </article>
  ${Footer()}`;
};

export default EditBlog;
