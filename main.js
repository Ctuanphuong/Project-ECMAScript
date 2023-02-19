import AboutPage from "@/pages/AboutPage";
import AddBlog from "@/pages/admin/AddBlog";
import AddCategory from "@/pages/admin/AddCategory";
import AddProject from "@/pages/admin/AddProject";
import EditBlog from "@/pages/admin/EditBlog";
import EditCategory from "@/pages/admin/EditCategory";
import EditProject from "@/pages/admin/EditProject";
import HomePageAdmin from "@/pages/admin/HomePageAdmin";
import ListBlog from "@/pages/admin/ListBlog";
import ListCategory from "@/pages/admin/ListCategory";
import ListProject from "@/pages/admin/ListProject";
import LoginPage from "@/pages/admin/LoginPage";
import BlogPage from "@/pages/BlogPage";
import ContactPage from "@/pages/ContactPage";
import HomePage from "@/pages/HomePage";
import PageNotFound from "@/pages/PageNotFound";
import ProjectPage from "@/pages/ProjectPage";
import ServicesPage from "@/pages/ServicesPage";
import { render, router } from "@/utilities";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
const app = document.querySelector("#app");
router.on("/", () => render(HomePage, app));
router.on("/about", () => render(AboutPage, app));
router.on("/portfolio", () => render(ProjectPage, app));
router.on("/services", () => render(ServicesPage, app));
router.on("/blog", () => render(BlogPage, app));
router.on("/contact", () => render(ContactPage, app));

//Admin routes
router.on("/admin", () => render(HomePageAdmin, app));
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

router.on("/admin/login", () => render(LoginPage, app));
router.notFound(render(PageNotFound, app));

router.resolve();
