import Navigo from "navigo";
import { router } from "@/utilities";
const Header = () => {
  return /*html*/ `   
  <!-- WRAP HEADER -->
  <header class="site-header" id="site-header">
    <div class="container-full">
      <nav class="navbar navbar-expand-lg bg-success-subtle">
        <div class="container">
          <a
            class="navbar-brand tw-font-bold"
            style="color: #fd4312"
            href="/admin"
            >PhuongDev.</a
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

            <form class="d-flex" role="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  </header>
  <!--END WRAP HEADER -->`;
};

export default Header;
