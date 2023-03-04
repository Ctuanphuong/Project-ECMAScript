import { useEffect, router } from "@/utilities";
import axios from "axios";

const Login = () => {
  useEffect(() => {
    const formLogin = document.getElementById("login");
    const email = document.getElementById("email_user");
    const password = document.getElementById("psw_user");
    formLogin.addEventListener("submit", async (e) => {
      e.preventDefault();
      const user = {
        email: email.value,
        password: password.value,
      };
      try {
        const response = await axios.post("http://localhost:3000/login", user);
        localStorage.setItem("user", JSON.stringify(response.data.user));
        alert("Login successfully!");
        router.navigate("/admin");
      } catch ({ errors }) {
        alert("Login failed: " + errors);
        console.error(errors);
      }
    });
  });
  return /*html*/ ` 
  <div class="bg-gradient-primary tw-h-[660px]">
  <div class="container">
    <!-- Outer Row -->
    <div class="row justify-content-center">
      <div class="col-xl-10 col-lg-12 col-md-9">
        <div class="card o-hidden border-0 shadow-lg my-5">
          <div class="card-body p-0">
            <!-- Nested Row within Card Body -->
            <div class="row">
              <div
                class="col-lg-6 d-none d-lg-block bg-login-image"
                style="border-right: 1px solid #e5e7eb"
              ></div>
              <div class="col-lg-6">
                <div class="p-5">
                  <div class="text-center">
                    <h1 class="h4 text-gray-900 mb-4">Welcome Back!</h1>
                  </div>
                  <form class="user" id="login">
                    <div class="form-group">
                      <input
                        type="email"
                        class="form-control form-control-user"
                        id="email_user"
                        aria-describedby="emailHelp"
                        placeholder="Enter Email Address..."
                      />
                    </div>
                    <div class="form-group">
                      <input
                        type="password"
                        class="form-control form-control-user"
                        id="psw_user"
                        placeholder="Password"
                      />
                    </div>
                    <div class="form-group">
                      <div class="custom-control custom-checkbox small">
                        <input
                          type="checkbox"
                          class="custom-control-input"
                          id="customCheck"
                        />
                        <label class="custom-control-label" for="customCheck"
                          >Remember Me</label
                        >
                      </div>
                    </div>
                    <button
                      class="btn btn-info btn-user btn-block"
                    >
                      Login
                    </button>
                  </form>
                  <hr />
                  <div class="text-center">
                    <a class=" tw-no-underline tw-font-semibold tw-text-[#0b8696] transtion-3s hover:tw-text-[#0cdffa] hover:tw-underline" href="#"
                      >Forgot Password?</a
                    >
                  </div>
                  <div class="text-center mt-2">
                    <a class="tw-no-underline hover:tw-no-underline tw-font-semibold tw-text-[#222] hover:tw-text-[#222] tw-leading-normal" href="/register"
                      >Don't have an account? <span class="tw-text-[#fd4312] tw-font-bold  transtion-3s hover:tw-text-[#ba2e07] hover:tw-underline">Register</span></a
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
  </div>
</div>
`;
};

export default Login;
