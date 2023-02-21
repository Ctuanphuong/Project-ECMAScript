import { getCategories } from "@/api/category";
import { useEffect, useState } from "@/utilities";


const Project = ({ projects }) => {
  //get all categories
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategories()
      .then(({ data }) => setCategories(data))
      .catch((error) => console.error(error));
  }, []);

  return /*html*/ `  
   <!-- 1 row -->
  <div class="tw-grid tw-grid-cols-3 gap-4 mb-4">
  ${projects.map((project) => {
    const getNameCate = categories.filter((category) => {
      return category.id == project.categoryId
    })

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
<a href="/project-detail/${project.id}"><i class="fa-solid fa-circle-info transition-3s hover:tw-text-[#022d47]"></i></a>
</div>
<div class="box-content">
<span class="tw-uppercase tw-text-base tw-block tw-font-bold"
>${getNameCate[0]?.name}
</span>
<h3 class="tw-pt-[6px]">
<a
  href="/project-detail/${project.id}"
  class="tw-text-2xl tw-leading-tight tw-text-[#fff] txt-capital tw-font-bold tw-no-underline transition-3s hover:tw-text-[#022d47] tw-block"
  >${project.name}</a
>
</h3>
</div>
</div>
<!-- end column -->
`;
  }).join("")}
 
  </div>
  <!-- end row -->`
}

export default Project