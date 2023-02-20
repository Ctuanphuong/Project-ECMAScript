
const Project = ({ projects }) => {
    return /*html*/ `  
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
<!-- end column -->
`;
    }).join("")}
 
  </div>
  <!-- end row -->`
}

export default Project