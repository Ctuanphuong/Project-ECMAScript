import Header from "@/components/admin/Header";
import Footer from "@/components/admin/Footer";
import { useEffect, useState } from "@/utilities";
import { getAbouts, removeAbout } from "@/api/about";
const ListAbout = () => {
    //get all abouts
    const [abouts, setAbouts] = useState([]);
    useEffect(() => {
        getAbouts()
            .then(({ data }) => setAbouts(data))
            .catch((error) => console.error(error));
    }, []);

    //delete about
    useEffect(() => {
        const btns = document.querySelectorAll(".btn-remove");
        for (let btn of btns) {
            btn.addEventListener("click", function () {
                const id = this.dataset.id;
                const confirmDel = window.confirm(
                    "Are you sure you want to delete this About?"
                );
                if (confirmDel) {
                    removeAbout(id);
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
        About Administrator Page
      </h1>
    </div>
    <div class="container">
      <div class="tw-my-4">
        <h3 class="tw-text-[#fdb63c] tw-font-bold tw-text-xl">
          <i class="fa-solid fa-list tw-mr-2"></i>List About
        </h3>
      </div>
    </div>
    <div class="tw-py-5">
      <table class="table container">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Heading 1</th>
            <th scope="col">Content 1</th>
            <th scope="col">Avatar</th>
            <th scope="col">Operation</th>
          </tr>
        </thead>
        <tbody>
          
          ${abouts
            .map((about, index) => {
                return/*html*/ `<tr>
            <th scope="row">${index + 1}</th>
            <td>${about.title}</td>
            <td>${about.heading1}</td>
            <td>${about.content1}</td>
            <td><img src="${about.avatar}" class="tw-w-[70px] tw-h-[70px] tw-rounded tw-border"></td>
            <td>
              <a href="#" class="btn btn-danger btn-remove" data-id="${about.id
                    }">
              <i class="fa-solid fa-trash"></i></a>
              <a href="/admin/edit-about/${about.id
                    }" class="btn btn-warning"
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

export default ListAbout;
