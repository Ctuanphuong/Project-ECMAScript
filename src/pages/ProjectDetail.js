import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getProject } from "@/api/project";
import { useEffect, useState } from "@/utilities";
import { getCategories } from "@/api/category";

const ProjectDetail = ({ id }) => {
  //get data projects
  const [project, setProject] = useState({});

  useEffect(() => {
    getProject(id).then(({ data }) => setProject(data));
  }, []);

  //get all categories
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategories().then(({ data }) => setCategories(data)).catch((error) => console.error(error));
  }, []);

  //so sánh id để duyệt ra mảng cate chứa id và name hợp với categoryId
  const getNameCate = categories.filter((category) => {
    return category.id == project.categoryId
  })

  // Chỉ lấy năm
  console.log(project.date);
  let getArrDate = project.date?.split("-");
  let getYear = new Date(getArrDate)
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
          ${project.name}
          </h3>
          <ul class="tw-p-0 tw-m-0 tw-flex">
            <li
              class="tw-text-[#fff] tw-text-[15px] tw-list-none txt-captital font-open-sans"
            >
              <span
                class="tw-py-[2px] tw-px-3 tw-bg-[#fdb63c] tw-rounded-2xl tw-font-semibold tw-block"
                >${getYear.getFullYear()}</span
              >
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
                ><i class="fa-regular fa-folder-open"></i> ${getNameCate[0]?.name}</a
              >
            </li>
          </ul>
          <p
            class="tw-w-[95%] tw-mt-5 tw-text-lg tw-text-[#222] tw-font-normal leading-normal"
          >
          ${project.shortdes}
          </p>

          <a href="${project.link}" class="tw-mt-5 tw-block tw-no-underline tw-font-bold"
            ><mark
              class="tw-text-[#333] transition-3s hover:tw-bg-[#fd4312] hover:tw-text-[#fff] hover:tw-underline tw-px-3 tw-rounded-sm"
              >👉 Click here to visit this website</mark
            ></a
          >
        </div>
        <!-- one section blog -->
        <div class="blog-details-section">
          <h3
            class="tw-font-bold tw-text-2xl tw-text-[#333] leading-normal tw-mt-8 tw-capitalize"
          >
            website preview
          </h3>
          <p
            class="tw-w-[90%] tw-mt-2 tw-text-[17px] tw-text-[#222] tw-font-normal tw-leading-normal"
          >
          ${project.detaildes}
          </p>
         ${project.images?.map(image => {
    return /*html*/ ` 
          <div
          class="img-blog-details tw-w-[700px] tw-h-[500px] tw-border tw-rounded-xl tw-overflow-hidden tw-shadow-2xl tw-text-center tw-mx-auto tw-mt-8 tw-mb-12"
        >
          <img
            src="${image}"
            alt="blog details img"
            class="tw-w-full tw-h-full tw-align-middle"
          />
        </div>`
  })}
        </div>
        <!-- end one section blog-->
       
        <div class="filter-blog tw-mt-10">
          <a
            href="#"
            class="tw-py-2 tw-px-3 tw-text-sm tw-bg-[#f2f2f2] tw-text-[#666] tw-rounded tw-mr-2 transition-3s hover:tw-bg-[#fd4312] hover:tw-text-[#fff] tw-no-underline"
          >
            HTML/CSS
          </a>
          <a
            href="#"
            class="tw-py-2 tw-px-3 tw-text-sm tw-bg-[#f2f2f2] tw-text-[#666] tw-rounded tw-mr-2 transition-3s hover:tw-bg-[#fd4312] hover:tw-text-[#fff] tw-no-underline"
          >
            ECMAScript
          </a>
          <a
            href="#"
            class="tw-py-2 tw-px-3 tw-text-sm tw-bg-[#f2f2f2] tw-text-[#666] tw-rounded tw-mr-2 transition-3s hover:tw-bg-[#fd4312] hover:tw-text-[#fff] tw-no-underline"
          >
            JavaScript
          </a>
          <a
            href="#"
            class="tw-py-2 tw-px-3 tw-text-sm tw-bg-[#f2f2f2] tw-text-[#666] tw-rounded tw-mr-2 transition-3s hover:tw-bg-[#fd4312] hover:tw-text-[#fff] tw-no-underline"
          >
            ReactJS
          </a>
          <a
            href="#"
            class="tw-py-2 tw-px-3 tw-text-sm tw-bg-[#f2f2f2] tw-text-[#666] tw-rounded tw-mr-2 transition-3s hover:tw-bg-[#fd4312] hover:tw-text-[#fff] tw-no-underline"
          >
            TypeScript
          </a>
        </div>
      </div>
    </div>
  </article>
    <!-- END WRAP ARTICLE -->
    ${Footer()}`
}

export default ProjectDetail