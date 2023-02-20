import { useEffect, useState } from "@/utilities";

const Category = ({ categories, onClick }) => {
    useEffect(() => {
        const btns = document.querySelectorAll("#btn-filter");
        for (const btn of btns) {
            btn.addEventListener("click", function () {
                const id = this.dataset.id;
                onClick(id);
            });
        }
    });

    //render ra màn hình
    return /*html*/ ` 
    <div class="button-group tw-text-center mb-5">
    <button
      class="tw-border tw-rounded btn-port transition-3s btn-port-active"
    >
      All
    </button>
${categories
            .map((category) => {
                return /*html*/ `
<button data-id="${category.id}" class="tw-border tw-rounded btn-port transition-3s" id="btn-filter">
${category.name}
</button>`;
            })
            .join("")}
    </div>`;
};

export default Category;
