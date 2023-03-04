import { useEffect, router } from "@/utilities";
import axios from "axios";

const Register = () => {
  useEffect(() => {
    const formRegister = document.getElementById("register");
    const firstName = document.getElementById("first_name");
    const lastName = document.getElementById("last_name");
    const email = document.getElementById("email_user");
    const password = document.getElementById("psw_user");
    const repassword = document.getElementById("psw_user");
    const role = document.getElementById("role_user");
    formRegister.addEventListener("submit", async (e) => {
      e.preventDefault();
      const user = {
        firstname: firstName.value,
        lastname: lastName.value,
        email: email.value,
        password: password.value,
        role: Number(role.value),
      };
      try {
        await axios.post("http://localhost:3000/register", user);
        alert("Register Account Successfully!");
        router.navigate("/login");
      } catch ({ errors }) {
        alert("Register Account Failure!", errors);
        console.error(errors);
      }
    });
  });
  return /*html*/ `
  <div class="bg-gradient-primary tw-py-[50px]">
    <div class="container">
      <div class="card o-hidden border-0 shadow-lg my-5">
        <div class="card-body p-0">
          <!-- Nested Row within Card Body -->
          <div class="row">
            <div
              class="col-lg-5 d-none d-lg-block bg-register-image"
              style="border-right: 1px solid #e5e7eb"
            ></div>
            <div class="col-lg-7">
              <div class="p-5">
                <div class="text-center">
                  <h1 class="h4 text-gray-900 mb-4">Create an Account!</h1>
                </div>
                <form class="user" id="register">
                  <div class="form-group row">
                    <div class="col-sm-6 mb-3 mb-sm-0">
                      <input
                        type="text"
                        class="form-control form-control-user"
                        id="first_name"
                        placeholder="First Name"
                      />
                    </div>
                    <div class="col-sm-6">
                      <input
                        type="text"
                        class="form-control form-control-user"
                        id="last_name"
                        placeholder="Last Name"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <input
                      type="email"
                      class="form-control form-control-user"
                      id="email_user"
                      placeholder="Email Address"
                    />
                  </div>
                  <div class="form-group row">
                    <div class="col-sm-6 mb-3 mb-sm-0">
                      <input
                        type="password"
                        class="form-control form-control-user"
                        id="psw_user"
                        placeholder="Password"
                      />
                    </div>
                    <div class="col-sm-6">
                      <input
                        type="password"
                        class="form-control form-control-user"
                        id="psw_user"
                        placeholder="Repeat Password"
                      />
                    </div>
                    <input type="hidden" id="role_user" value="2">
                  </div>
                  <button
                    class="btn btn-primary btn-user btn-block"
                  >
                    Register Account
                  </button>
                </form>
                <hr />
                <div class="text-center">
                  <a class=" tw-no-underline tw-font-semibold tw-text-[#0b8696] transtion-3s hover:tw-text-[#0cdffa] hover:tw-underline" href="#"
                    >Forgot Password?</a
                  >
                </div>
                <div class="text-center">
                  <a class="tw-no-underline hover:tw-no-underline tw-font-semibold tw-text-[#222] hover:tw-text-[#222] tw-leading-normal" href="/login"
                    >Already have an account? <span class=" tw-text-[#fd4312] tw-font-bold  transtion-3s hover:tw-text-[#ba2e07] hover:tw-underline">Login</span></a
                  >
                </div>
              </div>
            </div>
          </div>
          
        </div>
        
      </div>
      <div>
      <a href="/" class="tw-text-[#fff] tw-font-semibold transtition-3s  hover:tw-text-[#fd4312]"><i class="fa-solid fa-arrow-left tw-mr-1"></i> Home</a>
      </div>
    </div>
    </div>
`;
};

export default Register;
