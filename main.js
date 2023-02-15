import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import HomePage from "@/pages/HomePage";
import AboutPage from "@/pages/AboutPage";
import ProjectPage from "@/pages/ProjectPage";
import PageNotFound from "@/pages/PageNotFound";
const app = document.querySelector("#app");
import { render, router } from "@/utilities";
import ServicesPage from "@/pages/ServicesPage";
import ContactPage from "@/pages/ContactPage";
import HomePageAdmin from "@/pages/admin/HomePageAdmin";
import BlogPage from "@/pages/BlogPage";
import AddProject from "@/pages/admin/AddProject";
router.on("", () => render(HomePage, app));
router.on("/about", () => render(AboutPage, app));
router.on("/portfolio", () => render(ProjectPage, app));
router.on("/services", () => render(ServicesPage, app));
router.on("/blog", () => render(BlogPage, app));
router.on("/contact", () => render(ContactPage, app));
router.notFound(() => render(PageNotFound, app));
//Admin routes
router.on("/admin", () => render(HomePageAdmin, app));
router.on("/admin/add-project", () => render(AddProject, app));

router.resolve();
