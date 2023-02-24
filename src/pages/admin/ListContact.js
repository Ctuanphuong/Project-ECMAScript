import Header from "@/components/admin/Header";
import Footer from "@/components/admin/Footer";
import { useEffect, useState } from "@/utilities";
import { getContacts } from "@/api/contact";

const ListContact = () => {
    //get all Contact
    const [contacts, setContacts] = useState([]);
    useEffect(() => {
        getContacts()
            .then(({ data }) => setContacts(data))
            .catch((error) => console.error(error));
    }, []);

    //delete Contact
    useEffect(() => {
        const btns = document.querySelectorAll(".btn-remove");
        for (let btn of btns) {
            btn.addEventListener("click", function () {
                const id = this.dataset.id;
                const confirmDel = window.confirm(
                    "Are you sure you want to delete this Contact?"
                );
                if (confirmDel) {
                    removeContact(id);
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
        Contact Administrator Page
      </h1>
    </div>
    <div class="container">
      <div class="tw-my-4">
        <h3 class="tw-text-[#fdb63c] tw-font-bold tw-text-xl">
          <i class="fa-solid fa-list tw-mr-2"></i>List Contact
        </h3>
      </div>
    </div>
    <div class="tw-py-5">
      <table class="table container">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Heading 1</th>
            <th scope="col">Content 1</th>
            <th scope="col">Heading 2</th>
            <th scope="col">Content 2</th>
            <th scope="col">Heading 3</th>
            <th scope="col">Content 3</th>
            <th scope="col">Operation</th>
          </tr>
        </thead>
        <tbody>
          
          ${contacts
            .map((contact, index) => {
                return `<tr>
            <th scope="row">${index + 1}</th>
            <td>${contact.heading1}</td>
            <td>${contact.content1}</td>
            <td>${contact.heading2}</td>
            <td>${contact.content2}</td>
            <td>${contact.heading3}</td>
            <td>${contact.content3}</td>
            <td>
              <a href="#" class="btn btn-danger btn-remove" data-id="${contact.id
                    }">
              <i class="fa-solid fa-trash"></i></a>
              <a href="/admin/edit-contact/${contact.id
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

export default ListContact;
