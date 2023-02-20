import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect, useState } from "@/utilities";
import { getBlogs } from "@/api/blog";
const BlogPage = () => {
  // get all blog
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    getBlogs()
      .then(({ data }) => setBlogs(data))
      .catch((error) => console.error(error));
  }, []);

  return /*html*/ `  
  <!--WRAP ARTICLE -->
  ${Header()}
  <article class="tw-mt-[80px] tw-pb-[100px]">
    <div class="container">
      <section class="hello">
        <div class="tw-mx-auto tw-pb-10 tw-relative">
          <h2
            class="tw-text-center tw-leading-4 tw-text-2xl tw-uppercase tw-mb-6 tw-text-[#222] tw-font-bold pt-5"
          >
            <i class="fa-solid fa-newspaper tw-mr-2"></i>
            Blog
          </h2>
          <p
            class="tw-text-[#948daa] tw-font-normal tw-text-xl tw-w-[59%] tw-text-center tw-mx-auto"
          >
            Articles or short blogs that I write for you
          </p>
        </div>
      </section>
      <!-- wrap blog -->
      <section>
        <div class="container">
${blogs.map(blog => {
    return /*html*/ ` 
<!-- 1 row -->
<div
  class="tw-flex tw-pb-5 tw-border-b tw-border-[#e0e0e0] tw-mt-5"
>
  <div class="box-img-blog tw-mr-8">
    <div class="wrap-blog-img tw-w-full tw-h-full">
      <a href="/blog-detail/${blog.id}"
        ><img
          src="${blog.avatar}"
          alt="Blog image"
          class="tw-w-full tw-h-full"
        />
      </a>
    </div>
  </div>
  <div class="wrap-content-blog tw-w-[90%]">
    <h3>
      <a
        href="/blog-detail/${blog.id}"
        class="tw-text-3xl tw-leading-snug tw-no-underline tw-text-[#333] tw-font-bold transition-3s hover:tw-text-[#fd4312]"
        >${blog.title}</a
      >
    </h3>
    <ul class="tw-p-0 tw-m-0 tw-flex">
      <li
        class="tw-text-[#948daa] tw-text-base tw-list-none txt-captital font-open-sans"
      >
        <i class="fa-regular fa-clock"></i> ${blog.date}
      </li>
      <li
        class="tw-mx-3 tw-text-[#948daa] tw-text-lg tw-list-none txt-captital font-open-sans"
      >
        |
      </li>
      <li class="tw-mr-[24px] tw-text-base tw-list-none">
        <a
          href=""
          class="tw-text-[#948daa] tw-no-underline tw-capitalize transition-3s hover:tw-text-[#fd4312] font-open-sans"
          ><i class="fa-regular fa-folder-open"></i> ${blog.categoryId}</a
        >
      </li>
    </ul>
    <p
      class="tw-w-[83%] tw-mt-2 tw-text-[17px] tw-text-[#222] tw-font-medium"
    >
    ${blog.shortcontent}
    </p>
  </div>
</div>
<!-- end 1 row -->`
  })}    
        </div>
      </section>
      <!-- wrap blog -->
    </div>
  </article>
  <!-- WRAP ARTICLE -->
  ${Footer()}`;
};

export default BlogPage;
