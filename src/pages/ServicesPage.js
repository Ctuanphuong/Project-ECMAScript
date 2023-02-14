import Header from "@/components/Header";
import Footer from "@/components/Footer";
const ServicesPage = () => {
  return `
  ${Header()}
  <!-- WRAP ARTICLE-->
  <article class="tw-mt-[80px] tw-pb-[100px]">
    <!-- BG-1 -->
    <div class="tw-bg-[#333] tw-relative tw-pb-[50px] tw-mb-[100px]">
      <div class="container">
        <section class="hello">
          <div class="tw-mx-auto tw-pb-10 tw-relative">
            <h2
              class="tw-text-center tw-leading-4 tw-text-2xl tw-uppercase tw-mb-6 tw-text-[#fff] tw-font-bold pt-5"
            >
              <i class="fa-brands fa-servicestack tw-mr-2"></i>
              Service
            </h2>
            <p
              class="tw-text-[#bdb9cb] tw-font-normal tw-text-xl tw-w-[59%] tw-text-center tw-mx-auto"
            >
              The services that I can gladly provide for you
            </p>
          </div>
        </section>
        <!-- wrap service -->
        <section>
          <div class="container">
            <!-- one row -->
            <div class="tw-grid tw-grid-cols-3 tw-gap-x-6 tw-mt-[10px]">
              <!-- one column -->
              <div class="sec-service">
                <div>
                  <div class="icon-box">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="36"
                      height="36"
                      fill="currentColor"
                      class="bi bi-window-split"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M2.5 4a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm2-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm1 .5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z"
                      />
                      <path
                        d="M2 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2Zm12 1a1 1 0 0 1 1 1v2H1V3a1 1 0 0 1 1-1h12ZM1 13V6h6.5v8H2a1 1 0 0 1-1-1Zm7.5 1V6H15v7a1 1 0 0 1-1 1H8.5Z"
                      />
                    </svg>
                  </div>
                </div>
                <h3
                  class="tw-text-[#fff] txt-capital transition-3s tw-mb-8 tw-text-[32px] tw-font-bold"
                >
                  website design
                </h3>
                <p
                  class="tw-text-[#b0aac0] transition-3s tw-box-border tw-text-lg tw-p-0 tw-m-0"
                >
                  Yeprehe nderit in voluptate velit esse prehen pteur sint
                  occaecat cupidat cillum dolore eu fugiat nulla pan proide
                  ulpa rum.
                </p>
              </div>
              <!-- end column -->
              <!-- one column -->
              <div class="sec-service">
                <div>
                  <div class="icon-box">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="36"
                      height="36"
                      fill="currentColor"
                      class="bi bi-laptop"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z"
                      />
                    </svg>
                  </div>
                </div>
                <h3
                  class="tw-text-[#fff] txt-capital transition-3s tw-mb-8 tw-text-[32px] tw-font-bold"
                >
                  Web Development
                </h3>
                <p
                  class="tw-text-[#b0aac0] transition-3s tw-box-border tw-text-lg tw-p-0 tw-m-0"
                >
                  Yeprehe nderit in voluptate velit esse prehen pteur sint
                  occaecat cupidat cillum dolore eu fugiat nulla pan proide
                  ulpa rum.
                </p>
              </div>
              <!-- end column -->
              <!-- one column -->
              <div class="sec-service">
                <div>
                  <div class="icon-box">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="36"
                      height="36"
                      fill="currentColor"
                      class="bi bi-fire"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16Zm0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15Z"
                      />
                    </svg>
                  </div>
                </div>
                <h3
                  class="tw-text-[#fff] txt-capital transition-3s tw-mb-8 tw-text-[32px] tw-font-bold"
                >
                  SEO Marketing
                </h3>
                <p
                  class="tw-text-[#b0aac0] transition-3s tw-box-border tw-text-lg tw-p-0 tw-m-0"
                >
                  Yeprehe nderit in voluptate velit esse prehen pteur sint
                  occaecat cupidat cillum dolore eu fugiat nulla pan proide
                  ulpa rum.
                </p>
              </div>
              <!-- end column -->
            </div>
            <!-- end row -->
          </div>
        </section>
        <!-- end wrap service -->
      </div>
    </div>
    <!-- END BG-1 -->
    <!-- BG-2 -->
    <div class="tw-bg-[#fff]">
      <!-- wrap reason why work with me -->
      <div class="container tw-flex tw-pb-[100px]">
        <div class="tw-mr-[100px] tw-h-auto">
          <img
            src="https://res.cloudinary.com/phuong-fpoly/image/upload/v1675705207/Phuongdzvl/z4089537235819_4ad1ad7b060e811cc063b92765bf93c7_x3ie25.jpg"
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
            I always strive to create the best products possible to keep my
            customers happy and entertained. I stay up to date with the most
            popular UX design trends in the fastest way.
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
    </div>
    <!-- END BG-2 -->
  </article>
  <!-- END WRAP ARTICLE -->
  ${Footer()}`;
};

export default ServicesPage;
