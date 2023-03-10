import Header from "@/components/admin/Header";
import Footer from "@/components/admin/Footer";
import { router, useEffect, useState } from "@/utilities";
import { addBlog } from "@/api/blog";
import { getCategories } from "@/api/category";
import UpImage from "@/components/admin/UpImage";
const AddBlog = () => {
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

  // add blog
  useEffect(() => {
    const formAdd = document.querySelector("#form-add");
    const titleBlog = document.querySelector("#title-blog");
    const cateBlog = document.querySelector("#cate-blog");
    const shortContent = document.querySelector("#short-content");
    const longContent = document.querySelector("#editor");
    const avatarBlog = document.querySelector("#avatar-blog");
    const imgBlog = document.querySelector("#img-blog");
    const dateBlog = document.querySelector("#date-blog");
    formAdd.addEventListener("submit", async (e) => {
      e.preventDefault();
      const avatar = await UpImage(avatarBlog.files);
      const images = await UpImage(imgBlog.files);
      const blog = {
        title: titleBlog.value,
        categoryId: Number(cateBlog.value),
        shortcontent: shortContent.value,
        longcontent: longContent.value,
        avatar,
        images,
        date: dateBlog.value,
      };
      //add
      addBlog(blog)
        .then(() => {
          alert("Add Blog Successfully!");
          router.navigate("/admin/list-blog");
        })
        .catch(({ errors }) => {
          alert("Add Blog Failure! ", errors);
          console.error(errors);
        });
    });
  });
  return /*html*/ `
  <!-- WRAP ARTICLE -->
   ${Header()}
  <article class="tw-pb-10 mt-5">
    <div class="container px-4">
      <div class="tw-my-4">
        <h3 class="text-info tw-font-bold tw-text-xl">
          <i class="fa-solid fa-square-plus tw-mr-1"></i> Add Blog
        </h3>
      </div>
      <form id="form-add">
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
          />
        </div>
        <div class="form-group">
          <label
            for="cate-blog"
            class="tw-block tw-mb-1 tw-mt-2 tw-font-medium"
            >Blog's Category</label
          >
          <select class="form-control" id="cate-blog">
          <option value="0">Select Category</option>
          ${categories.map((category) => {
            return /*html*/ `<option value="${category.id}">${category.name}</option>`;
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
          ></textarea>
        </div>
        <div class="form-group">
          <label
            for="editor"
            class="tw-block tw-mb-1 tw-mt-2 tw-font-medium"
            >Long content</label
          >
          <textarea
            class="form-control"
            id="editor"
            rows="3"
            placeholder="Enter long content of the blog..."
          ></textarea>
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
          multiple
        />
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
          />
        </div>
        <div class="tw-mt-4">
          <button class="btn btn-success">Add Blog</button>
        </div>
      </form>
    </div>
  </article>
  <!-- END WRAP ARTICLE -->
  ${Footer()}`;
};

export default AddBlog;
