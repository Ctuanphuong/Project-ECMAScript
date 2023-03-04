import Header from "@/components/admin/Header";
import Footer from "@/components/admin/Footer";
import { useEffect, useState, router } from "@/utilities";
import axios from "axios";

const EditUser = ({ id }) => {
  const [user, setUser] = useState({});
  useEffect(() => {
    axios
      .get(`http://localhost:3000/users/${id}`)
      .then(({ data }) => setUser(data))
      .catch((errors) => console.log(errors));
  }, []);
  useEffect(() => {
    const formUpdate = document.getElementById("form-edit");
    const firstName = document.getElementById("first_name");
    const lastName = document.getElementById("last_name");
    const email = document.getElementById("email_user");
    const password = document.getElementById("psw_user");
    const role = document.getElementById("role_user");
    formUpdate.addEventListener("submit", async (e) => {
      e.preventDefault();
      let newpassword = password.length > 0 ? password.value : password.accept;
      const newUser = {
        id,
        firstname: firstName.value,
        lastname: lastName.value,
        email: email.value,
        password: newpassword,
        role: Number(role.value),
      };
      console.log(newUser);
      try {
        await axios.put(`http://localhost:3000/users/${id}`, newUser);
        alert(`Update User Successfully!`);
        router.navigate("/admin/list-user");
      } catch ({ errors }) {
        alert(`Update User Failure: `, errors);
        console.error(errors);
      }
    });
  });
  return /*html*/ `
  ${Header()}
    <!-- WRAP ARTICLE -->
    <article class="tw-pb-10 mt-5">
      <div class="container px-4">
        <div class="tw-my-4">
          <h3 class="text-info tw-font-bold tw-text-xl">
          <i class="fa-solid fa-pen-to-square"></i> Edit User
          </h3>
        </div>
        <form id="form-edit">
          <div class="form-group">
            <label
              for="first_name"
              class="tw-block tw-mb-1 tw-mt-2 tw-font-medium"
              >Fist Name</label
            >
            <input
              type="text"
              class="form-control"
              id="first_name"
              placeholder="Enter first name..."
              value="${user.firstname}"
            />
          </div>
          <div class="form-group">
          <label
            for="last_name"
            class="tw-block tw-mb-1 tw-mt-2 tw-font-medium"
            >Last Name</label
          >
          <input
            type="text"
            class="form-control"
            id="last_name"
            placeholder="Enter last name..."
            value="${user.lastname}"
          />
        </div>
        <div class="form-group">
        <label
          for="email_user"
          class="tw-block tw-mb-1 tw-mt-2 tw-font-medium"
          >Email</label
        >
        <input
          type="text"
          class="form-control"
          id="email_user"
          placeholder="Enter email user..."
          value="${user.email}"
        />
        <div class="form-group">
        <label
          for="psw_user"
          class="tw-block tw-mb-1 tw-mt-2 tw-font-medium"
          >Password</label
        >
        <input
          type="text"
          class="form-control"
          id="psw_user"
          placeholder="Enter password user..."
          value="${user.password}" 
          accept="${user.password}"
   
        />
      <div class="form-group">
      <label
        for="role_user"
        class="tw-block tw-mb-1 tw-mt-2 tw-font-medium"
        >Role</label
      >
      <input
        type="text"
        class="form-control"
        id="role_user"
        placeholder="Enter user's role..."
        value="${user.role}"
      />
    </div>
      </div>
          <div class="tw-mt-4">
            <button class="btn btn-success btn-add">Update</button>
          </div>
        </form>
      </div>
    </article>
    <!-- END WRAP ARTICLE -->
    ${Footer()}`;
};

export default EditUser;
