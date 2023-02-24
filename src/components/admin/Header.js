import Navigo from "navigo";
import { router } from "@/utilities";
const Header = () => {
  return /*html*/ `   
  <!-- WRAP HEADER -->
  <header class="site-header" id="site-header">
    <div class="container-full">
      <nav class="navbar navbar-expand-lg">
        <div class="container">
          <a
            class="navbar-brand tw-font-bold"
            style="color: #fd4312"
            href="/admin"
            ><img src="https://res.cloudinary.com/phuong-fpoly/image/upload/v1674789466/Project%20ECMAScript/Portfolio/main-logo_qu6a9y.png" class="tw-w-[180px] tw-h-[100px] mt-1"></a
          >
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="/admin"  data-navigo
                  >Home</a
                >
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="/admin/list-category"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  data-navigo
                >
                  Category
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="/admin/add-category" data-navigo >Add Category</a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/admin/list-category" data-navigo >List Category</a>
                  </li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="/admin/list-project"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Project
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="/admin/add-project">Add Project</a></li>
                  <li>
                    <a class="dropdown-item" href="/admin/list-project">List Project</a>
                  </li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="/admin/list-blog"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Blog
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="/admin/add-blog">Add Blog</a></li>
                  <li>
                    <a class="dropdown-item" href="/admin/list-blog">List Blog</a>
                  </li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="/admin/list-blog"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Intro
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="/admin/add-intro">Add Intro</a></li>
                  <li>
                    <a class="dropdown-item" href="/admin/list-intro">List Intro</a>
                  </li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="/admin/list-blog"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                About
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="/admin/add-about">Add About</a></li>
                  <li>
                    <a class="dropdown-item" href="/admin/list-about">List About</a>
                  </li>
                </ul>
              </li>
              <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="/admin/list-blog"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
              Contact
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="/admin/add-contact">Add Contact</a></li>
                <li>
                  <a class="dropdown-item" href="/admin/list-contact">List Contact</a>
                </li>
              </ul>
            </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="/admin/log-out"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i class="fa-solid fa-gear"></i> Setting
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="/admin/login"
                      >Log out<i
                        class="tw-ml-2 fa-solid fa-right-from-bracket"
                      ></i
                    ></a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </header>
  <!--END WRAP HEADER -->`;
};

export default Header;
