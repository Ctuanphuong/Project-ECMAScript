const Header = () => {
  return /*html*/ `   
  <!-- WRAP HEADER -->
  <div id="page-top">
  <!-- Page Wrapper -->
  <div id="wrapper">
    <!-- Sidebar -->
    <ul
      class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >
      <!-- Sidebar - Brand -->
      <a
        class="sidebar-brand d-flex align-items-center justify-content-center"
        href="/admin"
      >
        <div class="sidebar-brand-icon rotate-n-15">
          <i class="bi bi-emoji-smile"></i>
        </div>
        <div class="sidebar-brand-text mx-3">PhuongCT <sup>admin</sup></div>
      </a>

      <!-- Divider -->
      <hr class="sidebar-divider my-0" />

      <!-- Nav Item - Dashboard -->
      <li class="nav-item active">
        <a class="nav-link" href="/admin">
          <i class="fas fa-fw fa-tachometer-alt"></i>
          <span>Dashboard</span></a
        >
      </li>

      <!-- Divider -->
      <hr class="sidebar-divider" />

      <!-- Heading -->
      <div class="sidebar-heading">Interface</div>

      <!-- Category -->
      <li class="nav-item">
        <a
          class="nav-link collapsed"
          href="#"
          data-toggle="collapse"
          data-target="#collapseCate"
          aria-expanded="true"
          aria-controls="collapseCate"
        >
          <i class="bi bi-card-list"></i>
          <span>Category</span>
        </a>
        <div
          id="collapseCate"
          class="collapse"
          aria-labelledby="headingTwo"
          data-parent="#accordionSidebar"
        >
          <div class="bg-white py-2 collapse-inner rounded">
            <h6 class="collapse-header">Category Components:</h6>
            <a class="collapse-item" href="/admin/add-category">Add Category</a>
            <a class="collapse-item" href="/admin/list-category">List Category</a>
          </div>
        </div>
      </li>
      <!-- Project -->
      <li class="nav-item">
        <a
          class="nav-link collapsed"
          href="#"
          data-toggle="collapse"
          data-target="#collapsePro"
          aria-expanded="true"
          aria-controls="collapsePro"
        >
          <i class="bi bi-folder-check"></i>
          <span>Project</span>
        </a>
        <div
          id="collapsePro"
          class="collapse"
          aria-labelledby="headingTwo"
          data-parent="#accordionSidebar"
        >
          <div class="bg-white py-2 collapse-inner rounded">
            <h6 class="collapse-header">Project Components:</h6>
            <a class="collapse-item" href="/admin/add-project">Add Project</a>
            <a class="collapse-item" href="/admin/list-project">List Project</a>
          </div>
        </div>
      </li>
      <!-- Blog -->
      <li class="nav-item">
        <a
          class="nav-link collapsed"
          href="#"
          data-toggle="collapse"
          data-target="#collapseBlog"
          aria-expanded="true"
          aria-controls="collapseBlog"
        >
          <i class="bi bi-layout-text-window-reverse"></i>
          <span>Blog</span>
        </a>
        <div
          id="collapseBlog"
          class="collapse"
          aria-labelledby="headingTwo"
          data-parent="#accordionSidebar"
        >
          <div class="bg-white py-2 collapse-inner rounded">
            <h6 class="collapse-header">Blog Components:</h6>
            <a class="collapse-item" href="/admin/add-blog">Add Blog</a>
            <a class="collapse-item" href="/admin/list-blog">List Blog</a>
          </div>
        </div>
      </li>
      <!-- Intro -->
      <li class="nav-item">
        <a
          class="nav-link collapsed"
          href="#"
          data-toggle="collapse"
          data-target="#collapseIntro"
          aria-expanded="true"
          aria-controls="collapseIntro"
        >
          <i class="bi bi-emoji-wink"></i>
          <span>Intro</span>
        </a>
        <div
          id="collapseIntro"
          class="collapse"
          aria-labelledby="headingTwo"
          data-parent="#accordionSidebar"
        >
          <div class="bg-white py-2 collapse-inner rounded">
            <h6 class="collapse-header">Intro Components:</h6>
            <a class="collapse-item" href="/admin/add-intro">Add Intro</a>
            <a class="collapse-item" href="/admin/list-intro">List Intro</a>
          </div>
        </div>
      </li>
      <!-- About -->
      <li class="nav-item">
        <a
          class="nav-link collapsed"
          href="#"
          data-toggle="collapse"
          data-target="#collapseAbout"
          aria-expanded="true"
          aria-controls="collapseAbout"
        >
          <i class="bi bi-info-square"></i>
          <span>About</span>
        </a>
        <div
          id="collapseAbout"
          class="collapse"
          aria-labelledby="headingTwo"
          data-parent="#accordionSidebar"
        >
          <div class="bg-white py-2 collapse-inner rounded">
            <h6 class="collapse-header">About Components:</h6>
            <a class="collapse-item" href="/admin/add-about">Add About</a>
            <a class="collapse-item" href="/admin/list-about">List About</a>
          </div>
        </div>
      </li>
      <!-- Contact -->
      <li class="nav-item">
        <a
          class="nav-link collapsed"
          href="#"
          data-toggle="collapse"
          data-target="#collapseContact"
          aria-expanded="true"
          aria-controls="collapseContact"
        >
          <i class="bi bi-telephone"></i>
          <span>Contact</span>
        </a>
        <div
          id="collapseContact"
          class="collapse"
          aria-labelledby="headingTwo"
          data-parent="#accordionSidebar"
        >
          <div class="bg-white py-2 collapse-inner rounded">
            <h6 class="collapse-header">Contact Components:</h6>
            <a class="collapse-item" href="/admin/add-contact">Add Contact</a>
            <a class="collapse-item" href="/admin/list-contact">List Contact</a>
          </div>
        </div>
      </li>
      <!-- User -->
      <li class="nav-item">
        <a
          class="nav-link collapsed"
          href="#"
          data-toggle="collapse"
          data-target="#collapseUser"
          aria-expanded="true"
          aria-controls="collapseUser"
        >
          <i class="bi bi-people"></i>
          <span>User</span>
        </a>
        <div
          id="collapseUser"
          class="collapse"
          aria-labelledby="headingTwo"
          data-parent="#accordionSidebar"
        >
          <div class="bg-white py-2 collapse-inner rounded">
            <h6 class="collapse-header">User Components:</h6>
            <a class="collapse-item" href="/admin/list-user">List User</a>
          </div>
        </div>
      </li>

      <!-- Divider -->
      <hr class="sidebar-divider d-none d-md-block" />

    </ul>
    <!-- End of Sidebar -->

    <!-- Content Wrapper -->
    <div id="content-wrapper" class="d-flex flex-column">
      <!-- Main Content -->
      <div id="content">
        <!-- Topbar -->
        <nav
          class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow px-3"
        >
          <!-- Sidebar Toggle (Topbar) -->
          <button
            id="sidebarToggleTop"
            class="btn btn-link d-md-none rounded-circle mr-3"
          >
            <i class="fa fa-bars"></i>
          </button>

          <!-- Topbar Search -->
          <form
            class="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search"
          >
            <div class="input-group">
              <input
                type="text"
                class="form-control bg-light border-0 small"
                placeholder="Search for..."
                aria-label="Search"
                aria-describedby="basic-addon2"
              />
              <div class="input-group-append">
                <button class="btn btn-primary" type="button">
                  <i class="fas fa-search fa-sm"></i>
                </button>
              </div>
            </div>
          </form>

          <!-- Topbar Navbar -->
          <ul class="navbar-nav ml-auto">
            <!-- Nav Item - Search Dropdown (Visible Only XS) -->
            <li class="nav-item dropdown no-arrow d-sm-none">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="searchDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i class="fas fa-search fa-fw"></i>
              </a>
              <!-- Dropdown - Messages -->
              <div
                class="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                aria-labelledby="searchDropdown"
              >
                <form class="form-inline mr-auto w-100 navbar-search">
                  <div class="input-group">
                    <input
                      type="text"
                      class="form-control bg-light border-0 small"
                      placeholder="Search for..."
                      aria-label="Search"
                      aria-describedby="basic-addon2"
                    />
                    <div class="input-group-append">
                      <button class="btn btn-primary" type="button">
                        <i class="fas fa-search fa-sm"></i>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </li>

            <div class="topbar-divider d-none d-sm-block"></div>

            <!-- Nav Item - User Information -->
            <li class="nav-item dropdown no-arrow">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="userDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span class="mr-2 d-none d-lg-inline text-gray-600 small"
                  >Chu Tuan Phuong</span
                >
                <img
                  class="img-profile rounded-circle"
                  src="https://res.cloudinary.com/phuong-fpoly/image/upload/v1675732410/Phuongdzvl/z4089536537933_86732b06f1b33f8f45773fe1ff68548a_lkddmz.jpg"
                />
              </a>
              <!-- Dropdown - User Information -->
              <div
                class="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                aria-labelledby="userDropdown"
              >
                <a class="dropdown-item" href="#">
                  <i class="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                  Profile
                </a>
                <a class="dropdown-item" href="#">
                  <i class="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                  Settings
                </a>
                <a class="dropdown-item" href="#">
                  <i class="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                  Activity Log
                </a>
                <div class="dropdown-divider"></div>
                <a
                  class="dropdown-item"
                  href="#"
                  data-toggle="modal"
                  data-target="#logoutModal"
                >
                  <i
                    class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"
                  ></i>
                  Logout
                </a>
              </div>
            </li>
          </ul>
        </nav>
        <!-- End of Topbar -->

  <!--END WRAP HEADER -->`;
};

export default Header;
