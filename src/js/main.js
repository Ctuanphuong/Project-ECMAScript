import AboutPage from "@/pages/AboutPage";
import AccountPage from "@/pages/AccountPage";
import AddAbout from "@/pages/admin/AddAbout";
import AddBlog from "@/pages/admin/AddBlog";
import AddCategory from "@/pages/admin/AddCategory";
import AddContact from "@/pages/admin/AddContact";
import AddIntro from "@/pages/admin/AddIntro";
import AddProject from "@/pages/admin/AddProject";
import EditAbout from "@/pages/admin/EditAbout";
import EditBlog from "@/pages/admin/EditBlog";
import EditCategory from "@/pages/admin/EditCategory";
import EditContact from "@/pages/admin/EditContact";
import EditIntro from "@/pages/admin/EditIntro";
import EditProject from "@/pages/admin/EditProject";
import EditUser from "@/pages/admin/EditUser";
import HomePageAdmin from "@/pages/admin/HomePageAdmin";
import ListAbout from "@/pages/admin/ListAbout";
import ListBlog from "@/pages/admin/ListBlog";
import ListCategory from "@/pages/admin/ListCategory";
import ListContact from "@/pages/admin/ListContact";
import ListIntro from "@/pages/admin/ListIntro";
import ListProject from "@/pages/admin/ListProject";
import ListUser from "@/pages/admin/ListUser";
import Login from "@/pages/admin/Login";
import Register from "@/pages/admin/Register";
import BlogDetail from "@/pages/BlogDetail";
import BlogPage from "@/pages/BlogPage";
import ContactPage from "@/pages/ContactPage";
import HomePage from "@/pages/HomePage";
import PageNotFound from "@/pages/PageNotFound";
import ProjectDetail from "@/pages/ProjectDetail";
import ProjectPage from "@/pages/ProjectPage";
import ServicesPage from "@/pages/ServicesPage";
import { render, router } from "@/utilities";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
const app = document.querySelector("#app");

//client
router.on("/", () => render(HomePage, app));
router.on("/about", () => render(AboutPage, app));
router.on("/portfolio", () => render(ProjectPage, app));
router.on("/services", () => render(ServicesPage, app));
router.on("/blog", () => render(BlogPage, app));
router.on("/contact", () => render(ContactPage, app));
router.on("/account", () => render(AccountPage, app));
router.on("/project-detail/:id", ({ data }) =>
  render(() => ProjectDetail(data), app)
);
router.on("/blog-detail/:id", ({ data }) =>
  render(() => BlogDetail(data), app)
);

//Admin routes
router.on("/login", () => render(Login, app));
router.on("/register", () => render(Register, app));
router.on("/admin", () => render(HomePageAdmin, app));

//private router
router.on("/admin/*", () => {}, {
  before: (next) => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user || (user && user.role != 1)) return (window.location.href = "/");
    next();
  },
});
//category
router.on("/admin/add-category", () => render(AddCategory, app));
router.on("/admin/list-category", () => render(ListCategory, app));
router.on("/admin/edit-category/:id", ({ data }) =>
  render(() => EditCategory(data), app)
);
//project
router.on("/admin/add-project", () => render(AddProject, app));
router.on("/admin/list-project", () => render(ListProject, app));
router.on("/admin/edit-project/:id", ({ data }) =>
  render(() => EditProject(data), app)
);

//blog
router.on("/admin/add-blog", () => render(AddBlog, app));
router.on("/admin/list-blog", () => render(ListBlog, app));
router.on("/admin/edit-blog/:id", ({ data }) =>
  render(() => EditBlog(data), app)
);

//intro
router.on("/admin/add-intro", () => render(AddIntro, app));
router.on("/admin/list-intro", () => render(ListIntro, app));
router.on("/admin/edit-intro/:id", ({ data }) =>
  render(() => EditIntro(data), app)
);
router.on("/admin/login", ({ data }) => render(LoginPage(data), app));

//contact
router.on("/admin/add-contact", () => render(AddContact, app));
router.on("/admin/list-contact", () => render(ListContact, app));
router.on("/admin/edit-contact/:id", ({ data }) =>
  render(() => EditContact(data), app)
);

//about
router.on("/admin/add-about", () => render(AddAbout, app));
router.on("/admin/list-about", () => render(ListAbout, app));
router.on("/admin/edit-about/:id", ({ data }) =>
  render(() => EditAbout(data), app)
);

//user
router.on("/admin/list-user", () => render(ListUser, app));
router.on("/admin/edit-user/:id", ({ data }) =>
  render(() => EditUser(data), app)
);
router.notFound(render(PageNotFound, app));

router.resolve();
