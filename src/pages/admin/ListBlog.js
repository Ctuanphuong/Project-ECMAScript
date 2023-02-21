import Header from "@/components/admin/Header";
import Footer from "@/components/admin/Footer";
import { useEffect, useState } from "@/utilities";
import { getBlogs, removeBlog } from "@/api/blog";
import { getCategories } from "@/api/category";
const ListBlog = () => {
  // get all blog
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    getBlogs()
      .then(({ data }) => setBlogs(data))
      .catch((error) => console.error(error));
  }, []);

  //get all categories
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategories()
      .then(({ data }) => setCategories(data))
      .catch((error) => console.error(error));
  }, []);

  //delete blog
  useEffect(() => {
    const btns = document.querySelectorAll(".btn-remove");
    for (let btn of btns) {
      btn.addEventListener("click", function () {
        const id = this.dataset.id;
        const confirmDel = window.confirm(
          "Are you sure you want to remove this blog?"
        );
        if (confirmDel) {
          removeBlog(id)
            .then(() => {
              const newBlogs = blogs.filter((blog) => blog.id !== Number(id));
              setBlogs(newBlogs);
            })
            .catch((error) => console.error(error));
        }
      });
    }
  });
  return /*html*/ `
   <!-- WRAP ARTICLE -->
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
          <i class="fa-solid fa-list tw-mr-2"></i>List Blog
        </h3>
      </div>
    </div>
    <div class="tw-py-5">
      <table class="table container">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Category</th>
            <th scope="col">Content</th>
            <th scope="col">Operation</th>
          </tr>
        </thead>
        <tbody>
          ${blogs.map((blog, index) => {
    const getIdCate = categories.filter(category => { return category.id == blog.categoryId })
    return /*html*/ `  
<tr>
<th scope="row">${index + 1}</th>
<td>${blog.title}</td>
<td>${getIdCate[0].name}</td>
<td>${blog.shortcontent}</td>
<td>
  <a data-id="${blog.id}" class="btn btn-danger btn-remove"
    ><i class="fa-solid fa-trash"></i
  ></a>
  <a href="/admin/edit-blog/${blog.id}" class="btn btn-warning btn-update"
    ><i class="fa-solid fa-pen-to-square"></i
  ></a>
</td>
</tr>`;
  })}
        
        </tbody>
      </table>
    </div>
  </article>
  <!-- END WRAP ARTICLE -->
  ${Footer()}`;
};

export default ListBlog;
