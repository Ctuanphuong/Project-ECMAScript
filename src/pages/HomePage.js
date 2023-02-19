import Header from "@/components/Header";
import Footer from "@/components/Footer";
const HomePage = () => {
  return /*html*/ `
 ${Header()}
 <!-- Site Banner -->
 <section class="site-banner pb-5 tw-bg-[#f5edd8]">
   <div class="container tw-flex">
     <!-- hello section -->
     <div class="tw-ml-4">
       <p class="tw-text-2xl tw-text-[#333] tw-font-bold tw-mt-4">
         Hello, I'm
       </p>
       <p class="tw-text-7xl tw-mt-4 tw-text-[#fdb63c] tw-font-bold">
         Chu Tuan
       </p>
       <p class="tw-text-[#fd4312] tw-text-7xl tw-mt-4 tw-font-bold">
         Phuong
       </p>
       <p class="tw-text-2xl tw-text-[#615978] tw-mt-7 tw-font-normal">
         A passionate <strong>Website Designer</strong> from
         <strong>FPT Polytechnic</strong>
       </p>
       <!-- contact section -->
       <div class="tw-flex tw-mt-[60px]">
         <div class="tw-mr-6">
           <a
             href="/contact"
             class="tw-py-[15px] tw-px-[42px] tw-bg-[#fd4312] tw-text-[#fff] tw-rounded-md tw-uppercase tw-no-underline tw-font-bold transition-3s hov-contact-btn"
             >Contact Me</a
           >
         </div>
         <div>
           <ul class="tw-flex">
             <li class="list-none tw-mr-6 tw-font-normal tw-text-2xl">
               <a
                 href="https://www.facebook.com/phuongctdev"
                 class="tw-text-[#fd4312] transition-3s hov-contact-icon"
                 ><i class="fa-brands fa-facebook-f"></i
               ></a>
             </li>
             <li class="list-none tw-mr-6 tw-font-normal tw-text-2xl">
               <a
                 href="https://twitter.com/ctuanphuong"
                 class="tw-text-[#fd4312] transition-3s hov-contact-icon"
                 ><i class="fa-brands fa-twitter"></i
               ></a>
             </li>
             <li class="list-none tw-mr-6 tw-font-normal tw-text-2xl">
               <a
                 href="https://www.linkedin.com/in/chu-tuan-phuong-8739b1241/"
                 class="tw-text-[#fd4312] transition-3s hov-contact-icon"
                 ><i class="fa-brands fa-linkedin"></i
               ></a>
             </li>
             <li class="list-none tw-mr-6 tw-font-normal tw-text-2xl">
               <a
                 href=""
                 class="tw-text-[#fd4312] transition-3s hov-contact-icon"
                 ><i class="fa-brands fa-telegram"></i
               ></a>
             </li>
             <li class="list-none tw-mr-6 tw-font-normal tw-text-2xl">
               <a
                 href="https://www.instagram.com/ctuanphuong_/"
                 class="tw-text-[#fd4312] transition-3s hov-contact-icon"
                 ><i class="fa-brands fa-instagram"></i
               ></a>
             </li>
           </ul>
         </div>
       </div>
     </div>
     <!-- image section -->
     <div class="w-[50%] mx-auto effect-avt">
       <a href="/"
         ><img
           src="https://res.cloudinary.com/phuong-fpoly/image/upload/v1675732410/Phuongdzvl/z4089536537933_86732b06f1b33f8f45773fe1ff68548a_lkddmz.jpg"
           alt="avatar"
           class="tw-w-[240px] tw-h-[240px] tw-mt-4 tw-rounded-full tw-border-[3px] tw-border-[#fd4312] transition-3s hov-border-yellow hov-bot-shadow"
         />
       </a>
     </div>
 </section>
</div>
<!--END WRAP HEADER -->
<!-- ARTICLE -->
<article class="tw-mt-[90px] tw-mb-[100px]">
  <div>
    <!-- section intro -->
    <section class="tw-mx-auto container tw-mb-[100px]">
      <div class="tw-mx-auto tw-pb-10 tw-relative">
        <h2
          class="tw-text-center tw-leading-4 tw-text-2xl tw-uppercase tw-mb-6 tw-text-[#222] tw-font-bold"
        >
          <i class="fa-solid fa-door-open tw-mr-2"></i>
          Welcome to my world
        </h2>
        <p
          class="tw-text-[#948daa] tw-font-normal tw-text-xl tw-w-[59%] tw-text-center tw-mx-auto"
        >
          I am a young web engineer passionate about technology and like
          to take risks. I learn website design at FPT Polytechnic
          College.
        </p>
      </div>
      <!-- wrap column -->
      <div class="tw-grid tw-grid-cols-3 tw-gap-x-6">
        <!-- a column  -->
        <div class="tw-relative hov-column-1">
          <div
            class="virtual-card tw-bg-[#fd4312] tw-rounded-xl transition-3s tw-mb-5 tw-absolute tw-w-[354.56px] tw-h-[294.63px] tw-mt-[1px]"
          ></div>
          <div
            class="tw-border tw-border-[#e0e0e0] tw-rounded-xl transition-3s tw-bg-[#fff] hov-column-1 tw-mb-5 hov-bg-shadow-1 tw-relative"
          >
            <div class="tw-pt-12 tw-pr-12 tw-pl-12 tw-pb-10">
              <p>
                <i
                  class="fa-solid fa-flask tw-text-[#fdb63c] tw-text-5xl"
                ></i>
              </p>
              <h3 class="tw-text-[28px] tw-font-bold tw-mb-4 tw-mt-5">
                Creativity
              </h3>
              <p
                class="tw-text-[#615978] tw-font-normal tw-text-lg font-open-sans"
              >
                Dynamic, creative, always looking for new ideas. Update
                modern trends.
              </p>
            </div>
          </div>
        </div>
        <!-- a column  -->
        <div class="tw-relative hov-column-1">
          <div
            class="virtual-card tw-bg-[#fd4312] tw-rounded-xl transition-3s tw-mb-5 tw-absolute tw-w-[354.56px] tw-h-[294.63px] tw-mt-[1px]"
          ></div>
          <div
            class="tw-border tw-border-[#e0e0e0] tw-rounded-xl transition-3s tw-bg-[#fff] hov-column-1 tw-mb-5 hov-bg-shadow-1 tw-relative"
          >
            <div class="tw-pt-12 tw-pr-12 tw-pl-12 tw-pb-10">
              <p>
                <i
                  class="fa-solid fa-person-rays tw-text-[#fdb63c] tw-text-5xl"
                ></i>
              </p>
              <h3 class="tw-text-[28px] tw-font-bold tw-mb-4 tw-mt-5">
                Responsibility
              </h3>
              <p
                class="tw-text-[#615978] tw-font-normal tw-text-lg font-open-sans"
              >
                Always serious, self-disciplined, with a high sense of
                responsibility at work.
              </p>
            </div>
          </div>
        </div>
        <!-- a column  -->
        <div class="tw-relative hov-column-1">
          <div
            class="virtual-card tw-bg-[#fd4312] tw-rounded-xl transition-3s tw-mb-5 tw-absolute tw-w-[354.56px] tw-h-[294.63px] tw-mt-[1px]"
          ></div>
          <div
            class="tw-border tw-border-[#e0e0e0] tw-rounded-xl transition-3s tw-bg-[#fff] hov-column-1 tw-mb-5 hov-bg-shadow-1 tw-relative"
          >
            <div class="tw-pt-12 tw-pr-12 tw-pl-12 tw-pb-10">
              <p>
                <i
                  class="fa-solid fa-rocket tw-text-[#fdb63c] tw-text-5xl"
                ></i>
              </p>
              <h3 class="tw-text-[28px] tw-font-bold tw-mb-4 tw-mt-5">
                Hard Work
              </h3>
              <p
                class="tw-text-[#615978] tw-font-normal tw-text-lg font-open-sans"
              >
                Hard work, dedication, withstand high pressure
                environment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- end section intro -->
    <!-- wrap about me -->
    <section class="tw-bg-[#e9ecef] tw-mb-[100px]">
      <div class="container tw-flex tw-pt-[90px] tw-pb-[100px]">
        <div>
          <span
            class="tw-text-lg tw-uppercase tw-text-[#fd4312] tw-font-bold"
            >About me</span
          >
          <h2
            class="tw-text-5xl tw-font-bold tw-text-[#222] tw-leading-tight tw-mb-8"
          >
            Young Web Designer from FPT Polytechnic
          </h2>
          <p class="tw-text-lg tw-text-[#615978] tw-leading-normal">
            I am a young Front-end Developer. I am passionate about web
            programming. I design and develop services for clients of all
            sizes, specializing in creating stylish, modern websites, web
            services, and online stores.
          </p>
          <p class="tw-text-lg tw-text-[#615978] tw-leading-normal">
            I code and create web elements for amazing people around the
            world. I like work with new people. New people new
            Experiences.
          </p>
          <div class="row tw-pt-6 tw-mb-9">
            <!-- 1 column -->
            <div class="col-md-6">
              <ul class="tw-p-0">
                <li class="tw-list-none">
                  <h4
                    class="tw-text-[#222] tw-text-base tw-uppercase tw-font-bold"
                  >
                    Name
                  </h4>
                  <p
                    class="tw-text-[#615978] tw-text-lg tw-leading-normal"
                  >
                    Chu Tuan Phuong
                  </p>
                </li>
                <li class="tw-list-none">
                  <h4
                    class="tw-text-[#222] tw-text-base tw-uppercase tw-font-bold"
                  >
                    Email
                  </h4>
                  <p
                    class="tw-text-[#615978] tw-text-lg tw-leading-normal"
                  >
                    ctuanphuong18@gmail.com
                  </p>
                </li>
                <li class="tw-list-none">
                  <h4
                    class="tw-text-[#222] tw-text-base tw-uppercase tw-font-bold"
                  >
                    Phone
                  </h4>
                  <p
                    class="tw-text-[#615978] tw-text-lg tw-leading-normal"
                  >
                    +84 869784543
                  </p>
                </li>
              </ul>
            </div>
            <!-- 1 column -->
            <div class="col-md-6">
              <ul class="tw-p-0">
                <li class="tw-list-none">
                  <h4
                    class="tw-text-[#222] tw-text-base tw-uppercase tw-font-bold"
                  >
                    Age
                  </h4>
                  <p
                    class="tw-text-[#615978] tw-text-lg tw-leading-normal"
                  >
                    20 Years Old
                  </p>
                </li>
                <li class="tw-list-none">
                  <h4
                    class="tw-text-[#222] tw-text-base tw-uppercase tw-font-bold"
                  >
                    EDUCATION
                  </h4>
                  <p
                    class="tw-text-[#615978] tw-text-lg tw-leading-normal"
                  >
                    FPT Polytechnic College
                  </p>
                </li>
                <li class="tw-list-none">
                  <h4
                    class="tw-text-[#222] tw-text-base tw-uppercase tw-font-bold"
                  >
                    Freelance
                  </h4>
                  <p
                    class="tw-text-[#615978] tw-text-lg tw-leading-normal"
                  >
                    Available
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <a
              href="#"
              class="tw-py-[15px] tw-px-[42px] tw-bg-[#fd4312] tw-text-[#fff] tw-rounded-md tw-uppercase tw-no-underline tw-font-bold transition-3s hov-contact-btn"
              >Download CV</a
            >
          </div>
        </div>
        <div class="tw-ml-[100px] tw-h-auto">
          <img
            src="https://res.cloudinary.com/phuong-fpoly/image/upload/v1674699425/Phuongdzvl/z3986215443062_9346f7e00a76ff291e3aac85478d4c14_lpexsi.jpg"
            alt="Phuong Dev's Image"
            class="tw-w-[100%] tw-rounded-xl hov-img-shadow transition-3s hover:tw-rotate-3 tw-h-[90%]"
          />
        </div>
      </div>
    </section>
    <!-- end wrap about me -->
    <!-- wrap my portfolio -->
    <section class="container btns-portfolio tw-mb-[100px]">
      <div class="hello">
        <div class="tw-mx-auto tw-pb-10 tw-relative">
          <h2
            class="tw-text-center tw-leading-4 tw-text-2xl tw-uppercase tw-mb-6 tw-text-[#222] tw-font-bold"
          >
            <i class="fa-sharp fa-solid fa-square-check tw-mr-2"></i>
            PROJECT completed
          </h2>
          <p
            class="tw-text-[#948daa] tw-font-normal tw-text-xl tw-w-[59%] tw-text-center tw-mx-auto"
          >
            The projects I was able to complete during my time at FPT
            Polytechnic College.
          </p>
        </div>
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
          <a href="#"><i class="fa-solid fa-circle-info transition-3s hover:tw-text-[#fd4312]"></i></a>
        </div>
        <div class="box-content">
          <span class="tw-uppercase tw-text-base tw-block tw-font-bold"
            >ECMAScript
          </span>
          <h3 class="tw-pt-[6px]">
            <a
              href="#"
              class="tw-text-2xl tw-leading-tight tw-text-[#fff] txt-capital tw-font-bold tw-no-underline transition-3s hover:tw-text-[#fd4312] tw-block"
              >CV online website</a
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
          <a href="#"><i class="fa-solid fa-circle-info transition-3s hover:tw-text-[#fd4312]"></i></a>
        </div>
        <div class="box-content">
          <span class="tw-uppercase tw-text-base tw-block tw-font-bold"
            >ECMAScript
          </span>
          <h3 class="tw-pt-[6px]">
            <a
              href="#"
              class="tw-text-2xl tw-leading-tight tw-text-[#fff] txt-capital tw-font-bold tw-no-underline transition-3s hover:tw-text-[#fd4312] tw-block"
              >CV online website</a
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
          <a href="#"><i class="fa-solid fa-circle-info transition-3s hover:tw-text-[#fd4312]"></i></a>
        </div>
        <div class="box-content">
          <span class="tw-uppercase tw-text-base tw-block tw-font-bold"
            >ECMAScript
          </span>
          <h3 class="tw-pt-[6px]">
            <a
              href="#"
              class="tw-text-2xl tw-leading-tight tw-text-[#fff] txt-capital tw-font-bold tw-no-underline transition-3s hover:tw-text-[#fd4312] tw-block"
              >CV online website</a
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
          <a href="#"><i class="fa-solid fa-circle-info transition-3s hover:tw-text-[#fd4312]"></i></a>
        </div>
        <div class="box-content">
          <span class="tw-uppercase tw-text-base tw-block tw-font-bold"
            >ECMAScript
          </span>
          <h3 class="tw-pt-[6px]">
            <a
              href="#"
              class="tw-text-2xl tw-leading-tight tw-text-[#fff] txt-capital tw-font-bold tw-no-underline transition-3s hover:tw-text-[#fd4312] tw-block"
              >CV online website</a
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
          <a href="#"><i class="fa-solid fa-circle-info transition-3s hover:tw-text-[#fd4312]"></i></a>
        </div>
        <div class="box-content">
          <span class="tw-uppercase tw-text-base tw-block tw-font-bold"
            >ECMAScript
          </span>
          <h3 class="tw-pt-[6px]">
            <a
              href="#"
              class="tw-text-2xl tw-leading-tight tw-text-[#fff] txt-capital tw-font-bold tw-no-underline transition-3s hover:tw-text-[#fd4312] tw-block"
              >CV online website</a
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
            <a href="#"><i class="fa-solid fa-circle-info transition-3s hover:tw-text-[#fd4312]"></i></a>
          </div>
          <div class="box-content">
            <span class="tw-uppercase tw-text-base tw-block tw-font-bold"
              >ECMAScript
            </span>
            <h3 class="tw-pt-[6px]">
              <a
                href="#"
                class="tw-text-2xl tw-leading-tight tw-text-[#fff] txt-capital tw-font-bold tw-no-underline transition-3s hover:tw-text-[#fd4312] tw-block"
                >CV online website</a
              >
            </h3>
          </div>
        </div>
        <!-- end column -->
      </div>
      <!-- end row -->
      <!-- btn see more -->
      <div class="btn-see-more">
        <a href="/portfolio"
          >see more<i class="fa-solid fa-arrow-right tw-ml-2"></i
        ></a>
      </div>
      <!-- end btn see more -->
    </section>
    <!-- end wrap my portfolio -->
    <!-- wrap reason why work with me -->
          <section class="tw-bg-[#fff]">
            <div class="container tw-flex tw-pb-[80px]">
              <div class="tw-mr-[100px] tw-h-auto">
                <img
                  src="https://res.cloudinary.com/phuong-fpoly/image/upload/v1675705206/Phuongdzvl/z4089537232563_9e413befc1f1062ea28205f37c04ecc8_o5ly2d.jpg"
                  alt="Phuong Dev's Image"
                  class="tw-w-[100%] tw-rounded-xl hov-img-shadow transition-3s hover:tw-rotate-3 tw-h-[75%]"
                />
              </div>
              <div>
                <span
                  class="tw-text-lg tw-uppercase tw-text-[#fd4312] tw-font-bold"
                  >WHY WORK WITH ME</span
                >
                <h2
                  class="tw-text-5xl tw-font-bold tw-text-[#222] tw-leading-tight tw-mb-8"
                >
                  Best result with top user experience
                </h2>
                <p class="tw-text-lg tw-text-[#615978] tw-leading-normal">
                  I always strive to create the best products possible to keep
                  my customers happy and entertained. I stay up to date with the
                  most popular UX design trends in the fastest way.
                </p>
                <div class="tw-pt-6 tw-mb-9">
                  <!-- one row -->
                  <div class="tw-flex tw-justify-between tw-mb-6">
                    <div class="icon-service">
                      <i class="fa-solid fa-user-shield"></i>
                    </div>
                    <div>
                      <h4 class="tw-text-xl tw-mb-3 tw-font-bold tw-capitalize">
                        Lifetime Support
                      </h4>
                      <p class="tw-text-[#615978] font-open-sans tw-text-lg">
                        Lifetime support, ready to support when you have
                        difficulty in operating your website or any mistakes.
                      </p>
                    </div>
                  </div>
                  <!-- end row -->
                  <!-- one row -->
                  <div class="tw-flex tw-justify-between tw-mb-6">
                    <div class="icon-service">
                      <i class="fa-brands fa-codepen"></i>
                    </div>
                    <div>
                      <h4 class="tw-text-xl tw-mb-3 tw-font-bold tw-capitalize">
                        No Coding Required
                      </h4>
                      <p class="tw-text-[#615978] font-open-sans tw-text-lg">
                        Beautiful interface, easy to use and manipulate, you do
                        not need to edit anything and most importantly, do not
                        need to code.
                      </p>
                    </div>
                  </div>
                  <!-- end row -->
                  <!-- one row -->
                  <div class="tw-flex tw-justify-between tw-mb-6">
                    <div class="icon-service">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        class="bi bi-arrow-repeat"
                        viewBox="0 0 16 16"
                      >
                        <path
                          d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"
                        />
                        <path
                          fill-rule="evenodd"
                          d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"
                        />
                      </svg>
                    </div>

                    <div>
                      <h4 class="tw-text-xl tw-mb-3 tw-font-bold tw-capitalize">
                        Regular Updates
                      </h4>
                      <p class="tw-text-[#615978] font-open-sans tw-text-lg">
                        I regularly update the new, modern and eye-catching
                        interface as well as update more user-friendly features
                        for the best user experience.
                      </p>
                    </div>
                  </div>
                  <!-- end row -->
                </div>
              </div>
            </div>
            <!-- end wrap reason why work with me -->
          </section>
          <!-- end wrap my portfolio -->
          <!-- wrap blog -->
          <section>
            <div class="container tw-pb-[100px]">
              <div class="hello">
                <div class="tw-mx-auto tw-pb-10 tw-relative">
                  <h2
                    class="tw-text-center tw-leading-4 tw-text-2xl tw-uppercase tw-mb-6 tw-text-[#222] tw-font-bold"
                  >
                    <i class="fa-solid fa-newspaper tw-mr-2"></i>
                    From my Blog
                  </h2>
                  <p
                    class="tw-text-[#948daa] tw-font-normal tw-text-xl tw-w-[59%] tw-text-center tw-mx-auto"
                  >
                    Articles or short blogs that I write for you
                  </p>
                </div>
              </div>
              <div class="grid-cols-2 tw-mb-6">
                <!-- one column -->
                <div class="box-blog-1">
                  <div class="img-wrapper">
                    <img
                      src="https://res.cloudinary.com/phuong-fpoly/image/upload/v1675696488/Project%20ECMAScript/Portfolio/javascript-programming-code-abstract-technology-background_272306-155_gthlns.avif"
                      alt="Blog's Image"
                      class="tw-align-middle tw-w-full tw-h-full transition-3s"
                    />
                  </div>
                  <div class="box-blog-1-content">
                    <div>
                      <ul class="tw-flex tw-p-0 tw-m-0">
                        <li
                          class="tw-text-[#fff] tw-text-base tw-list-none txt-captital"
                        >
                          <i class="fa-regular fa-clock"></i> October 23, 2021
                        </li>
                        <li class="tw-mx-2 tw-text-[#fff] tw-text-base">
                          <span>|</span>
                        </li>
                        <li class="tw-mr-[24px] tw-text-base tw-list-none">
                          <a
                            href=""
                            class="tw-text-[#fff] tw-no-underline tw-capitalize transition-3s hover:tw-text-[#fd4312]"
                            ><i class="fa-regular fa-folder-open"></i>
                            JavaScript</a
                          >
                        </li>
                      </ul>

                      <h3 class="tw-mb-0 tw-mt-1">
                        <a
                          href="#"
                          class="tw-text-3xl tw-leading-snug tw-no-underline tw-text-[#fff] tw-font-bold transition-3s hover:tw-text-[#fd4312]"
                          >Javascript algorythm and data structure for
                          beginners</a
                        >
                      </h3>
                    </div>
                  </div>
                </div>
                <!-- end column -->

                <!-- one column -->
                <div class="grid-cols-2">
                  <!-- a small column -->
                  <div class="box-blog-2">
                    <div class="img-wrapper">
                      <img
                        src="https://res.cloudinary.com/phuong-fpoly/image/upload/v1675674749/Project%20ECMAScript/Portfolio/post-thumbnail-03_wnytfd.jpg"
                        alt="Blog's Image"
                        class="tw-align-middle tw-h-[250px]"
                      />
                    </div>
                    <div class="box-blog-2-content">
                      <ul class="tw-p-0 tw-m-0">
                        <li class="tw-mr-[24px] tw-text-base tw-list-none">
                          <a
                            href=""
                            class="tw-text-[#948daa] tw-no-underline tw-capitalize transition-3s font-open-sans"
                            ><i class="fa-regular fa-folder-open"></i> Web
                            design</a
                          >
                        </li>
                        <li class="tw-mt-2">
                          <h3>
                            <a
                              href="#"
                              class="tw-text-xl tw-font-bold tw-no-underline tw-leading-snug tw-text-[#222] transition-3s"
                            >
                              Design a wesite using Figma easily</a
                            >
                          </h3>
                        </li>
                        <li
                          class="blog-cat tw-text-[#948daa] tw-text-base tw-list-none transition-3s font-open-sans li-absolute"
                        >
                          <i class="fa-regular fa-clock"></i> October 23, 2021
                        </li>
                      </ul>
                    </div>
                  </div>
                  <!-- end a small column -->
                  <!-- a small column -->
                  <div class="box-blog-2">
                    <div class="img-wrapper">
                      <img
                        src="https://res.cloudinary.com/phuong-fpoly/image/upload/v1675674749/Project%20ECMAScript/Portfolio/post-thumbnail-04_v91i47.jpg"
                        alt="Blog's Image"
                        class="tw-align-middle tw-h-[250px]"
                      />
                    </div>
                    <div class="box-blog-2-content">
                      <ul class="tw-p-0 tw-m-0">
                        <li class="tw-mr-[24px] tw-text-base tw-list-none">
                          <a
                            href=""
                            class="tw-text-[#948daa] tw-no-underline tw-capitalize transition-3s font-open-sans"
                            ><i class="fa-regular fa-folder-open"></i> Web
                            design</a
                          >
                        </li>
                        <li class="tw-mt-2">
                          <h3>
                            <a
                              href="#"
                              class="tw-text-xl tw-font-bold tw-no-underline tw-leading-snug tw-text-[#222] transition-3s"
                            >
                              Break on through to the other side</a
                            >
                          </h3>
                        </li>
                        <li
                          class="blog-cat tw-text-[#948daa] tw-text-base tw-list-none transition-3s font-open-sans li-absolute"
                        >
                          <i class="fa-regular fa-clock"></i> October 23, 2021
                        </li>
                      </ul>
                    </div>
                  </div>
                  <!-- end a small column -->
                  <!-- a small column -->
                  <div class="box-blog-2">
                    <div class="img-wrapper">
                      <img
                        src="https://res.cloudinary.com/phuong-fpoly/image/upload/v1675674749/Project%20ECMAScript/Portfolio/post-thumbnail-05_kd0qcl.jpg"
                        alt="Blog's Image"
                        class="tw-align-middle tw-h-[250px]"
                      />
                    </div>
                    <div class="box-blog-2-content">
                      <ul class="tw-p-0 tw-m-0">
                        <li class="tw-mr-[24px] tw-text-base tw-list-none">
                          <a
                            href=""
                            class="tw-text-[#948daa] tw-no-underline tw-capitalize transition-3s font-open-sans"
                            ><i class="fa-regular fa-folder-open"></i> Web
                            design</a
                          >
                        </li>
                        <li class="tw-mt-2">
                          <h3>
                            <a
                              href="#"
                              class="tw-text-xl tw-font-bold tw-no-underline tw-leading-snug tw-text-[#222] transition-3s"
                            >
                              Imagine there is no heaven</a
                            >
                          </h3>
                        </li>
                        <li
                          class="blog-cat tw-text-[#948daa] tw-text-base tw-list-none transition-3s font-open-sans li-absolute"
                        >
                          <i class="fa-regular fa-clock"></i> October 23, 2021
                        </li>
                      </ul>
                    </div>
                  </div>
                  <!-- end a small column -->
                  <!-- a small column -->
                  <div class="box-blog-2">
                    <div class="img-wrapper">
                      <img
                        src="https://res.cloudinary.com/phuong-fpoly/image/upload/v1675674749/Project%20ECMAScript/Portfolio/post-thumbnail-06_yaallb.jpg"
                        alt="Blog's Image"
                        class="tw-align-middle tw-h-[250px]"
                      />
                    </div>
                    <div class="box-blog-2-content">
                      <ul class="tw-p-0 tw-m-0">
                        <li class="tw-mr-[24px] tw-text-base tw-list-none">
                          <a
                            href=""
                            class="tw-text-[#948daa] tw-no-underline tw-capitalize transition-3s font-open-sans"
                            ><i class="fa-regular fa-folder-open"></i> Web
                            design</a
                          >
                        </li>
                        <li class="tw-mt-2">
                          <h3>
                            <a
                              href="#"
                              class="tw-text-xl tw-font-bold tw-no-underline tw-leading-snug tw-text-[#222] transition-3s"
                            >
                              When the musics over turn off the light</a
                            >
                          </h3>
                        </li>
                        <li
                          class="blog-cat tw-text-[#948daa] tw-text-base tw-list-none transition-3s font-open-sans li-absolute"
                        >
                          <i class="fa-regular fa-clock"></i> October 23, 2021
                        </li>
                      </ul>
                    </div>
                  </div>
                  <!-- end a small column -->
                </div>
                <!-- end column -->
              </div>
              <!-- btn see more -->
              <div class="btn-see-more">
                <a href="blog.html"
                  >see more<i class="fa-solid fa-arrow-right tw-ml-2"></i
                ></a>
              </div>
              <!-- end btn see more -->
            </div>
          </section>
          <!-- end wrap blog -->
          <!-- wrap section contact -->
          <section class="container">
            <div class="hello tw-mb-[30px]">
              <div class="tw-mx-auto tw-pb-10 tw-relative">
                <h2
                  class="tw-text-center tw-leading-4 tw-text-2xl tw-uppercase tw-mb-6 tw-text-[#222] tw-font-bold"
                >
                  <i class="fa-solid fa-address-book tw-mr-2"></i>
                  Get in touch
                </h2>
                <p
                  class="tw-text-[#948daa] tw-font-normal tw-text-xl tw-w-[59%] tw-text-center tw-mx-auto"
                >
                  Below is the address and information for you to contact me.
                </p>
              </div>
            </div>
            <div class="grid-cols-3 tw-pb-[50px]">
              <!-- a column -->
              <div class="tw-flex">
                <div>
                  <div class="icon-contact">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      class="bi bi-pin-map"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M3.1 11.2a.5.5 0 0 1 .4-.2H6a.5.5 0 0 1 0 1H3.75L1.5 15h13l-2.25-3H10a.5.5 0 0 1 0-1h2.5a.5.5 0 0 1 .4.2l3 4a.5.5 0 0 1-.4.8H.5a.5.5 0 0 1-.4-.8l3-4z"
                      />
                      <path
                        fill-rule="evenodd"
                        d="M8 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999z"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 class="tw-text-2xl tw-font-bold">Address</h4>
                  <address class="font-open-sans tw-text-lg tw-text-[#615978]">
                    Minh Khai, Bac Tu Liem, Ha Noi
                  </address>
                </div>
              </div>
              <!-- end a column -->
              <!-- a column -->
              <div class="tw-flex">
                <div>
                  <div class="icon-contact">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      class="bi bi-phone"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z"
                      />
                      <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 class="tw-text-2xl tw-font-bold">Phone Number</h4>
                  <address class="font-open-sans tw-text-lg tw-text-[#615978]">
                    +84 869784543
                  </address>
                </div>
              </div>
              <!-- end a column -->
              <!-- a column -->
              <div class="tw-flex">
                <div>
                  <div class="icon-contact">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      class="bi bi-mailbox"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M4 4a3 3 0 0 0-3 3v6h6V7a3 3 0 0 0-3-3zm0-1h8a4 4 0 0 1 4 4v6a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V7a4 4 0 0 1 4-4zm2.646 1A3.99 3.99 0 0 1 8 7v6h7V7a3 3 0 0 0-3-3H6.646z"
                      />
                      <path
                        d="M11.793 8.5H9v-1h5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.354-.146l-.853-.854zM5 7c0 .552-.448 0-1 0s-1 .552-1 0a1 1 0 0 1 2 0z"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 class="tw-text-2xl tw-font-bold">Email</h4>
                  <address class="font-open-sans tw-text-lg tw-text-[#615978]">
                    ctuanphuong18@gmail.com
                  </address>
                </div>
              </div>
              <!-- end a column -->
            </div>
            <div class="tw-flex tw-mt">
              <div class="sec-map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6360.988841678123!2d105.74171053113166!3d21.05245676423713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313455a2979cad73%3A0xd73e878e23ff9ddd!2zNTMvNTkvNTAgUC4gTmfhu41hIExvbmcsIE1pbmggS2hhaSwgQuG6r2MgVOG7qyBMacOqbSwgSMOgIE7hu5lpLCBWaeG7h3QgTmFt!5e1!3m2!1svi!2s!4v1675729869112!5m2!1svi!2s"
                  style="border: 0"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                  class="tw-w-full tw-h-full"
                ></iframe>
              </div>
              <div class="sec-mess">
                <h3
                  class="tw-text-[#222] tw-text-4xl tw-font-bold tw-mb-[40px]"
                >
                  Write me a message
                </h3>
                <div>
                  <form>
                    <div class="row">
                      <div class="col">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Your Name*"
                        />
                      </div>
                      <div class="col">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Your Email*"
                        />
                      </div>
                      <div class="form-group">
                        <label for="exampleFormControlTextarea1"></label>
                        <textarea
                          class="form-control"
                          id="exampleFormControlTextarea1"
                          rows="8"
                          placeholder="Your message here*"
                        ></textarea>
                      </div>
                    </div>
                    <button type="submit" class="btn-mess">Send message</button>
                  </form>
                </div>
              </div>
            </div>
          </section>
          <!-- end section contact -->
        </div>
      </article>
      <!-- END ARTICLE -->
      ${Footer()}
 `;
};

export default HomePage;
