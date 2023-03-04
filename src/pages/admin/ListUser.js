import Header from "@/components/admin/Header";
import Footer from "@/components/admin/Footer";
import { useEffect, useState } from "@/utilities";
import axios from "axios";
const ListUser = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/users")
      .then(({ data }) => setUsers(data))
      .catch(({ errors }) => console.error(errors));
  }, []);
  useEffect(() => {
    const btns = document.querySelectorAll(".btn-remove");
    for (const btn of btns) {
      btn.addEventListener("click", async function () {
        const id = this.dataset.id;
        const cfDel = window.confirm(
          "Are you sure you want to delete this user?"
        );
        if (cfDel) {
          try {
            await axios.delete(`http://localhost:3000/users/${id}`);
            const reUser = users.filter((user) => user.id != id);
            setUsers(reUser);
            alert("Delete successfully!");
          } catch ({ errors }) {
            alert("Delete Failed: " + errors);
            console.error(errors);
          }
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
         <i class="fa-solid fa-list tw-mr-2"></i>List User
       </h3>
     </div>
   </div>
   <div class="tw-py-5">
     <table class="table container">
       <thead>
         <tr>
           <th scope="col">#</th>
           <th scope="col">Full Name</th>
           <th scope="col">Email</th>
           <th scope="col">Role</th>
           <th scope="col">Operation</th>
         </tr>
       </thead>
       <tbody>
         
         ${users
           .map((user, index) => {
             return `<tr>
           <th scope="row">${index + 1}</th>
           <td>${user.firstname + " " + user.lastname}</td>
           <td>${user.email}</td>
           <td>${user.role}</td>
           <td>
             <button class="btn btn-danger btn-remove" data-id="${user.id}">
             <i class="fa-solid fa-trash"></i></button>
             <a href="/admin/edit-user/${user.id}" class="btn btn-warning"
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
 ${Footer()}
  `;
};

export default ListUser;
