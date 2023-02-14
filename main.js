import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import HomePage from "@/pages/HomePage";
import AboutPage from "@/pages/AboutPage";
import PortfolioPage from "@/pages/PortfolioPage";
import PageNotFound from "@/pages/PageNotFound";
const app = document.querySelector("#app");
import { render, router } from "@/utilities";
import ServicesPage from "@/pages/ServicesPage";
import ContactPage from "@/pages/ContactPage";
render(HomePage, app);
router.on("", () => render(HomePage, app));
router.on("/about", () => render(AboutPage, app));
router.on("/portfolio", () => render(PortfolioPage, app));
router.on("/services", () => render(ServicesPage, app));
router.on("/blog", () => render(PortfolioPage, app));
router.on("/contact", () => render(ContactPage, app));
router.notFound(() => render(PageNotFound, app));
router.resolve();
