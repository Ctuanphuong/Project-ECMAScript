import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getProjects } from "@/api/project";
import { useEffect, useState } from "@/utilities";
import { getCategories } from "@/api/category";
const ProjectPage = () => {
  //get all projects
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    getProjects()
      .then(({ data }) => setProjects(data))
      .catch((error) => console.error(error));
  }, []);

  //get all categories
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategories()
      .then(({ data }) => setCategories(data))
      .catch((error) => console.error(error));
  }, []);

  return /*html*/ ` 
  <!-- WRAP ARTICLE -->
 ${Header()}
  <article class="tw-mt-[80px] tw-pb-[100px]">
    <div class="container">
      <section class="hello">
        <div class="tw-mx-auto tw-pb-10 tw-relative">
          <h2
            class="tw-text-center tw-leading-4 tw-text-2xl tw-uppercase tw-mb-6 tw-text-[#222] tw-font-bold"
          >
            <i class="fa-sharp fa-solid fa-square-check tw-mr-2"></i>
            PORTFOLIO
          </h2>
          <p
            class="tw-text-[#948daa] tw-font-normal tw-text-xl tw-w-[59%] tw-text-center tw-mx-auto"
          >
            The projects I was able to complete during my time at FPT
            Polytechnic College.
          </p>
        </div>
      </section>
      <!-- wrap my portfolio -->
      <section class="btns-portfolio">
        <div class="button-group tw-text-center mb-5">
          <button
            class="tw-border tw-rounded btn-port transition-3s btn-port-active"
          >
            All
          </button>
          ${categories
      .map((category) => {
        return /*html*/ `
            <button class="tw-border tw-rounded btn-port transition-3s">
            ${category.name}
          </button>`;
      })
      .join("")}
        </div>
        <!-- 1 row -->
        <div class="tw-grid tw-grid-cols-3 gap-4 mb-4">
        ${projects.map((project) => {
        return /*html*/ `   
<!-- 1 column -->
<div
  class="tw-rounded-xl tw-relative transition-3s box tw-border"
>
  <a href="#"
    ><img
      src="${project.avatar}"
      alt="portfolio image"
      class="port-img"
    />
  </a>
  <div class="box-icon">
    <a href="#"><i class="fa-solid fa-circle-info"></i></a>
  </div>
  <div class="box-content">
    <span class="tw-uppercase tw-text-base tw-block tw-font-bold"
      >${project.categoryId}
    </span>
    <h3 class="tw-pt-[6px]">
      <a
        href="/project-detail/${project.id}"
        class="tw-text-2xl tw-leading-tight tw-text-[#fff] txt-capital tw-font-bold tw-no-underline hover:tw-font-black tw-block"
        >${project.name}</a
      >
    </h3>
  </div>
</div>
<!-- end column -->`;
      }).join("")}
       
        </div>
        <!-- end row -->
      </section>
      <!-- end wrap my portfolio -->
    </div>
  </article>
  <!--END WRAP ARTICLE -->
  ${Footer()}
  `;
};

export default ProjectPage;
