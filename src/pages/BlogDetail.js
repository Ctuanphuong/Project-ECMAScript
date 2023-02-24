import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { getBlog } from "@/api/blog";
import { useEffect, useState } from "@/utilities";
import { getCategories } from "@/api/category";

const BlogDetail = ({ id }) => {

  //get one blog
  const [blog, setBlog] = useState({});
  useEffect(() => {
    getBlog(id).then(({ data }) => setBlog(data));
  }, []);
  console.log(blog.images)
  //get all categories
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategories()
      .then(({ data }) => setCategories(data))
      .catch((error) => console.error(error));
  }, []);
  const getNameCate = categories.filter(category => category.id == blog.categoryId)
  console.log(getNameCate)
  return /*html*/ `
  ${Header()}
  <!-- WRAP ARTICLE -->
  <article class="tw-my-[80px]">
    <div class="container">
      <!-- one section  -->
      <div class="blog-details">
        <div class="wrap-content-blog">
          <h3
            class="leading-normal tw-text-4xl tw-leading-snug tw-no-underline tw-text-[#333] tw-font-bold transition-3s hover:tw-text-[#fd4312]"
          >
            ${blog.title}
          </h3>
          <ul class="tw-p-0 tw-m-0 tw-flex">
            <li
              class="tw-text-[#948daa] tw-text-lg tw-list-none txt-captital font-open-sans"
            >
              <i class="fa-regular fa-clock"></i>  ${blog.date}
            </li>
            <li
              class="tw-mx-3 tw-text-[#948daa] tw-text-lg tw-list-none txt-captital font-open-sans"
            >
              |
            </li>
            <li class="tw-mr-[24px] tw-text-lg tw-list-none">
              <a
                href=""
                class="tw-text-[#948daa] tw-no-underline tw-capitalize transition-3s hover:tw-text-[#fd4312] font-open-sans"
                ><i class="fa-regular fa-folder-open"></i>   ${getNameCate[0]?.name}</a
              >
            </li>
          </ul>
          <p
            class="tw-w-[95%] tw-mt-5 tw-text-lg tw-text-[#222] tw-font-normal leading-normal"
          >
          ${blog.shortcontent}
          </p>
        </div>
        <!-- one section blog -->
        <div class="blog-details-section">
          <p
            class="tw-w-[90%] tw-mt-2 tw-text-[17px] tw-text-[#222] tw-font-normal tw-leading-normal"
          >
          ${blog.longcontent}
          </p>
         ${blog.images?.map(image => {
    return /*html*/ `
    <div
    class="img-blog-details tw-w-[60%] tw-border tw-rounded-xl tw-overflow-hidden tw-shadow-2xl tw-text-center tw-mx-auto tw-mt-8 tw-mb-11"
  >
    <img
      src="${image}"
      alt="blog details img"
      class="tw-w-full tw-h-[500px] tw-align-middle"
    />
  </div>`
  })}
        </div>
        <!-- end one section blog-->
        <div class="filter-blog tw-mt-10">
          ${categories.map(category => {
    return /*html*/ `
    <a
    href="#"
    class="tw-py-2 tw-px-3 tw-text-sm tw-bg-[#f2f2f2] tw-text-[#666] tw-rounded tw-mr-2 transition-3s hover:tw-bg-[#fd4312] hover:tw-text-[#fff] tw-no-underline"
  >
    ${category.name}
  </a>`
  }).join('')}
        </div>
      </div>
    </div>
  </article>
   <!-- END WRAP ARTICLE -->
   ${Footer()}
   `
}

export default BlogDetail