import Header from "@/components/admin/Header";
import Footer from "@/components/admin/Footer";
const HomePageAdmin = () => {
  return /*html*/ `  
  ${Header()}
  <!-- WRAP ARTICLE -->
  <article>
    <div class="welcome container tw-my-10 tw-text-center">
      <h1 class="tw-text-4xl tw-text-[#333] tw-font-bold">
        Welcome to Phuong Dev's Administrator Page
      </h1>
    </div>
    <div class="container tw-text-center">
      <img
        src="https://res.cloudinary.com/phuong-fpoly/image/upload/v1676474190/Project%20ECMAScript/Portfolio/360_F_227450952_KQCMShHPOPebUXklULsKsROk5AvN6H1H-removebg-preview_x4r1p9.png"
        alt=""
        class="tw-inline-block"
      />
    </div>
  </article>
  <!-- END WRAP ARTICLE -->
  ${Footer()}`;
};

export default HomePageAdmin;
