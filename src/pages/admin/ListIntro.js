import Header from "@/components/admin/Header";
import Footer from "@/components/admin/Footer";
import { useEffect, useState } from "@/utilities";
import { getIntros, removeIntro } from "@/api/intro";
const ListIntro = () => {
  //get all intros
  const [intros, setIntros] = useState([]);
  useEffect(() => {
    getIntros()
      .then(({ data }) => setIntros(data))
      .catch((error) => console.error(error));
  }, []);

  //delete intro
  useEffect(() => {
    const btns = document.querySelectorAll(".btn-remove");
    for (let btn of btns) {
      btn.addEventListener("click", function () {
        const id = this.dataset.id;
        const confirmDel = window.confirm(
          "Are you sure you want to delete this category?"
        );
        if (confirmDel) {
          removeIntro(id);
        }
      });
    }
  });
  return /*html*/ `
  ${Header()}
   <!-- WRAP ARTICLE -->
  <article class="tw-pb-10 px-3 mt-5">
    <div class="container">
      <div class="tw-my-4">
        <h3 class="text-info tw-font-bold tw-text-xl">
          <i class="fa-solid fa-list tw-mr-2"></i>List Category
        </h3>
      </div>
    </div>
    <div class="tw-py-5">
      <table class="table container">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Short Intro</th>
            <th scope="col">Operation</th>
          </tr>
        </thead>
        <tbody>
          
          ${intros
            .map((intro, index) => {
              return `<tr>
            <th scope="row">${index + 1}</th>
            <td>${intro.firstname}</td>
            <td>${intro.lastname}</td>
            <td>${intro.shortintro}</td>
            <td>
              <button class="btn btn-danger btn-remove" data-id="${intro.id}">
              <i class="fa-solid fa-trash"></i></button>
              <a href="/admin/edit-intro/${intro.id}" class="btn btn-warning"
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

export default ListIntro;
