import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getProjects } from "@/api/project";
import { useEffect, useState } from "@/utilities";
import { getCategories } from "@/api/category";
import Category from "@/components/Category";
import Project from "@/components/Project";
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

  // get all projects when click one category 
  const onHandleClick = (id) => {
    fetch(`http://localhost:3000/categories/${id}?_embed=projects`)
      .then((response) => response.json())
      .then(({ projects }) => setProjects(projects));
  }

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

        ${Category({ categories, onClick: onHandleClick })}
     ${Project({ projects })}
      </section>
      <!-- end wrap my portfolio -->
    </div>
  </article>
  <!--END WRAP ARTICLE -->
  ${Footer()}
  `;
};

export default ProjectPage;
