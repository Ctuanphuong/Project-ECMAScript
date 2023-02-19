import Header from "@/components/Header";
import Footer from "@/components/Footer";
const ProjectPage = () => {
  return /*html*/ ` 
  <!-- WRAP ARTICLE -->
 ${Header()}
  <article class="tw-mt-[80px] tw-pb-[100px]">
    <div class="container">
      <section class="hello">
        <div class="tw-mx-auto tw-pb-10 tw-relative">
          <h2
            class="tw-text-center tw-leading-4 tw-text-2xl tw-uppercase tw-mb-6 tw-text-[#222] tw-font-bold"
          >
            <i class="fa-sharp fa-solid fa-square-check tw-mr-2"></i>
            PORTFOLIO
          </h2>
          <p
            class="tw-text-[#948daa] tw-font-normal tw-text-xl tw-w-[59%] tw-text-center tw-mx-auto"
          >
            The projects I was able to complete during my time at FPT
            Polytechnic College.
          </p>
        </div>
      </section>
      <!-- wrap my portfolio -->
      <section class="btns-portfolio">
        <div class="button-group tw-text-center mb-5">
          <button
            class="tw-border tw-rounded btn-port transition-3s btn-port-active"
          >
            All
          </button>
          <button class="tw-border tw-rounded btn-port transition-3s">
            ECMAScript
          </button>
          <button class="tw-border tw-rounded btn-port transition-3s">
            Advanced JS
          </button>
          <button class="tw-border tw-rounded btn-port transition-3s">
            HTML5 & CSS3
          </button>
        </div>
        <!-- 1 row -->
        <div class="tw-grid tw-grid-cols-3 gap-4 mb-4">
          <!-- 1 column -->
          <div
            class="tw-rounded-xl tw-relative transition-3s box tw-border"
          >
            <a href="#"
              ><img
                src="https://res.cloudinary.com/phuong-fpoly/image/upload/v1675585736/Project%20ECMAScript/Portfolio/Screenshot_2023-02-05_152435_qencil.png"
                alt="portfolio image"
                class="port-img"
              />
            </a>
            <div class="box-icon">
              <a href="#"><i class="fa-solid fa-circle-info"></i></a>
            </div>
            <div class="box-content">
              <span class="tw-uppercase tw-text-base tw-block tw-font-bold"
                >HTML5 & CSS3
              </span>
              <h3 class="tw-pt-[6px]">
                <a
                  href="#"
                  class="tw-text-2xl tw-leading-tight tw-text-[#fff] txt-capital tw-font-bold tw-no-underline hover:tw-font-black tw-block"
                  >School Theme Website</a
                >
              </h3>
            </div>
          </div>
          <!-- end column -->
          <!-- 1 column -->
          <div
            class="tw-rounded-xl tw-relative transition-3s box tw-border"
          >
            <a href="#"
              ><img
                src="https://res.cloudinary.com/phuong-fpoly/image/upload/v1675585741/Project%20ECMAScript/Portfolio/Screenshot_2023-02-05_152041_qsggpy.png"
                alt="portfolio image"
                class="port-img"
              />
            </a>
            <div class="box-icon">
              <a href="#"><i class="fa-solid fa-circle-info"></i></a>
            </div>
            <div class="box-content">
              <span class="tw-uppercase tw-text-base tw-block tw-font-bold"
                >HTML5 & CSS3
              </span>
              <h3 class="tw-pt-[6px]">
                <a
                  href="#"
                  class="tw-text-2xl tw-leading-tight tw-text-[#fff] tw-font-bold tw-no-underline hover:tw-font-black tw-block txt-capital"
                  >fast food website</a
                >
              </h3>
            </div>
          </div>
          <!-- end column -->
          <!-- 1 column -->
          <div
            class="tw-rounded-xl tw-relative transition-3s box tw-border"
          >
            <a href="#"
              ><img
                src="https://res.cloudinary.com/phuong-fpoly/image/upload/v1675585736/Project%20ECMAScript/Portfolio/Screenshot_2023-02-05_152122_tvoizl.png"
                alt="portfolio image"
                class="port-img"
              />
            </a>
            <div class="box-icon">
              <a href="#"><i class="fa-solid fa-circle-info"></i></a>
            </div>
            <div class="box-content">
              <span class="tw-uppercase tw-text-base tw-block tw-font-bold"
                >HTML5 & CSS3
              </span>
              <h3 class="tw-pt-[6px]">
                <a
                  href="#"
                  class="tw-text-2xl tw-leading-tight tw-text-[#fff] txt-capital tw-font-bold tw-no-underline hover:tw-font-black tw-block"
                  >Basic Portfolio Website</a
                >
              </h3>
            </div>
          </div>
          <!-- end column -->
        </div>
        <!-- end row -->
        <!-- 1 row -->
        <div class="tw-grid tw-grid-cols-3 gap-4 mb-4">
          <!-- 1 column -->
          <div
            class="tw-rounded-xl tw-relative transition-3s box tw-border"
          >
            <a href="#"
              ><img
                src="https://res.cloudinary.com/phuong-fpoly/image/upload/v1675585737/Project%20ECMAScript/Portfolio/Screenshot_2023-02-05_152333_rgswz0.png"
                alt="portfolio image"
                class="port-img"
              />
            </a>
            <div class="box-icon">
              <a href="#"><i class="fa-solid fa-circle-info"></i></a>
            </div>
            <div class="box-content">
              <span class="tw-uppercase tw-text-base tw-block tw-font-bold"
                >PHP1
              </span>
              <h3 class="tw-pt-[6px]">
                <a
                  href="#"
                  class="tw-text-2xl tw-leading-tight tw-text-[#fff] txt-capital tw-font-bold tw-no-underline hover:tw-font-black tw-block"
                >
                  selling mobile phones online website</a
                >
              </h3>
            </div>
          </div>
          <!-- end column -->
          <!-- 1 column -->
          <div
            class="tw-rounded-xl tw-relative transition-3s box tw-border"
          >
            <a href="#"
              ><img
                src="https://res.cloudinary.com/phuong-fpoly/image/upload/v1675586684/Project%20ECMAScript/Portfolio/Screenshot_2023-02-05_154338_fvmkeo.png"
                alt="portfolio image"
                class="port-img"
              />
            </a>
            <div class="box-icon">
              <a href="#"><i class="fa-solid fa-circle-info"></i></a>
            </div>
            <div class="box-content">
              <span class="tw-uppercase tw-text-base tw-block tw-font-bold"
                >HTML5 & CSS3
              </span>
              <h3 class="tw-pt-[6px]">
                <a
                  href="#"
                  class="tw-text-2xl tw-leading-tight tw-text-[#fff] txt-capital tw-font-bold tw-no-underline hover:tw-font-black tw-block"
                  >Online clothing store Website</a
                >
              </h3>
            </div>
          </div>
          <!-- end column -->
          <!-- 1 column -->
          <div
            class="tw-rounded-xl tw-relative transition-3s box tw-border"
          >
            <a href="#"
              ><img
                src="https://res.cloudinary.com/phuong-fpoly/image/upload/v1675586525/Project%20ECMAScript/Portfolio/Screenshot_2023-02-05_154153_ulrc6q.png"
                alt="portfolio image"
                class="port-img"
              />
            </a>
            <div class="box-icon">
              <a href="#"><i class="fa-solid fa-circle-info"></i></a>
            </div>
            <div class="box-content">
              <span class="tw-uppercase tw-text-base tw-block tw-font-bold"
                >ECMAScript
              </span>
              <h3 class="tw-pt-[6px]">
                <a
                  href="#"
                  class="tw-text-2xl tw-leading-tight tw-text-[#fff] txt-capital tw-font-bold tw-no-underline hover:tw-font-black tw-block"
                  >CV online website</a
                >
              </h3>
            </div>
          </div>
          <!-- end column -->
        </div>
        <!-- end row -->
      </section>
      <!-- end wrap my portfolio -->
    </div>
  </article>
  <!--END WRAP ARTICLE -->
  ${Footer()}
  `;
};

export default ProjectPage;
