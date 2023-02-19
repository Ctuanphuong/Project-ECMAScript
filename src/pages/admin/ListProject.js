import Header from "@/components/admin/Header";
import Footer from "@/components/admin/Footer";
import { useEffect, useState } from "@/utilities";
import { getProjects, removeProject } from "@/api/project";
const ListProject = () => {
  //get all projects
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    getProjects()
      .then(({ data }) => setProjects(data))
      .catch((error) => console.error(error));
  }, []);

  //delete project
  useEffect(() => {
    const btns = document.querySelectorAll(".btn-remove");
    for (let btn of btns) {
      btn.addEventListener("click", function () {
        const id = this.dataset.id;
        const confirmDel = window.confirm(
          "Are you sure you want to delete this project?"
        );
        if (confirmDel) {
          removeProject(id)
            .then(() => {
              const newProjects = projects.filter(
                (project) => project.id !== Number(id)
              );
              setProjects(newProjects);
            })
            .catch(() => {
              console.error("Error!");
            });
        }
      });
    }
  });
  return /*html*/ ` 
  ${Header()}
     <!-- WRAP ARTICLE -->
  <article class="tw-pb-10">
    <div class="welcome container tw-my-10 tw-text-center">
      <h1 class="tw-text-4xl tw-text-[#333] tw-font-bold">
        Project Administrator Page
      </h1>
    </div>
    <div class="container">
      <div class="tw-my-4">
        <h3 class="tw-text-[#fdb63c] tw-font-bold tw-text-xl">
          <i class="fa-solid fa-list tw-mr-2"></i>List Project
        </h3>
      </div>
    </div>
    <div class="tw-py-5">
      <table class="table container">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Category</th>
            <th scope="col">Date</th>
            <th scope="col">Creator</th>
            <th scope="col">Link</th>
            <th scope="col">Avatar</th>
            <th scope="col">Operation</th>
          </tr>
        </thead>
        <tbody>
        ${projects
          .map((project, index) => {
            return /*html*/ `<tr>
          <th scope="row">${index + 1}</th>
          <td>${project.name}</td>
          <td>${project.categoryId}</td>
          <td>${project.date}</td>
          <td>${project.creator}</td>
          <td>
            <a
              href="${project.link}"
              class="tw-text-[#333] transition-3s hover:tw-text-[#fd4312]"
              >${project.link}</a
            >
          </td>
        
          <td><img src="${
            project.avatar
          }" class="tw-w-[70px] tw-h-[70px] tw-rounded"></td>
          <td>
          <td>
            <a href="#" data-id="${
              project.id
            }" class="btn btn-danger btn-remove"
              ><i class="fa-solid fa-trash"></i
            ></a>
            <a href="/admin/edit-project/${project.id}" class="btn btn-warning"
              ><i class="fa-solid fa-pen-to-square"></i
            ></a>
          </td>
        </tr>`;
          })
          .join("")}      
        </tbody>
      </table>
    </div>
  </article>
  <!-- END WRAP ARTICLE -->
  ${Footer()}`;
};

export default ListProject;
