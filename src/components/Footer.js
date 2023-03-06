const Footer = () => {
  return /*html*/ `
  <div class="wrap-btt container">
  <div
  class="back-to-top tw-w-[60px] tw-h-[60px] tw-bg-[#fd4312] transition-3s hover:tw-bg-[#ba2e07] tw-rounded-full tw-flex tw-justify-center tw-items-center"
>
  <a
    href="#site-header"
    class="tw-no-underline tw-text-[#fff] tw-text-3xl hover:tw-text-[#fff] tw-font-normal"
  >
    <i class="fa-solid fa-angle-up"></i>
  </a>
</div>
  </div>
   <!-- FOOTER SECTION -->
  <footer class="site-footer tw-bg-[#f5edd8]">
    <div class="container">
      <div class="row align-items-center justify-content-center">
        <div class="col-lg-6 tw-mx-auto">
          <a href="/" class="tw-flex tw-justify-center">
            <img
              src="https://res.cloudinary.com/phuong-fpoly/image/upload/v1677753097/Project%20ECMAScript/Portfolio/logo_ze5we1.png"
              alt="Phuong Dev's Logo"
              class="tw-w-[200px] tw-h-[90px] tw-mt-[60px] "
            />
          </a>
          <div class="tw-w-[70%] tw-mx-auto">
            <p
              class="tw-text-center tw-text-[#615978] tw-text-lg tw-leading-6 tw-font-normal tw-pt-5 tw-pb-5 tw-w-[100%]"
            >
              Give me suggestions or contact me for work through social
              media platforms:
            </p>
          </div>
          <div>
            <ul class="tw-flex justify-content-center">
              <li class="list-none tw-mr-8 tw-font-normal tw-text-3xl">
                <a
                  href="https://www.facebook.com/phuongctdev"
                  class="tw-text-[#fd4312] transition-3s hov-contact-icon"
                  ><i class="fa-brands fa-facebook-f"></i
                ></a>
              </li>
              <li class="list-none tw-mr-8 tw-font-normal tw-text-3xl">
                <a
                  href="https://twitter.com/ctuanphuong"
                  class="tw-text-[#fd4312] transition-3s hov-contact-icon"
                  ><i class="fa-brands fa-twitter"></i
                ></a>
              </li>
              <li class="list-none tw-mr-8 tw-font-normal tw-text-3xl">
                <a
                  href="https://www.linkedin.com/in/chu-tuan-phuong-8739b1241/"
                  class="tw-text-[#fd4312] transition-3s hov-contact-icon"
                  ><i class="fa-brands fa-linkedin"></i
                ></a>
              </li>
              <li class="list-none tw-mr-8 tw-font-normal tw-text-3xl">
                <a
                  href=""
                  class="tw-text-[#fd4312] transition-3s hov-contact-icon"
                  ><i class="fa-brands fa-telegram"></i
                ></a>
              </li>
              <li class="list-none tw-mr-8 tw-font-normal tw-text-3xl">
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
      <div class="tw-flex tw-justify-between tw-pt-[70px] tw-pb-[60px]">
        <div>
          <span class="tw-text-base tw-text-[#615978] tw-leading-6"
            >All rights reserved © 2023 <strong>PhuongDev</strong></span
          >
        </div>
        <div>
          <a href="#" class="tw-no-underline"
            ><span class="tw-text-base tw-text-[#615978] tw-leading-6"
              >Terms & Condition Privacy Policy</span
            ></a
          >
        </div>
      </div>
    
    </div>
  </footer>
  <!-- END FOOTER SECTION -->
  </div>`;
};

export default Footer;
