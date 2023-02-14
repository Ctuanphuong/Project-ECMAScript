import Header from "@/components/Header";
import Footer from "@/components/Footer";
const AboutPage = () => {
  return `
  ${Header()}
   <!-- WRAP ARTICLE -->
  <article class="tw-mt-[80px] tw-pb-[100px]">
    <div class="container">
      <section class="hello">
        <div class="tw-mx-auto tw-pb-10 tw-relative">
          <h2
            class="tw-text-center tw-leading-4 tw-text-2xl tw-uppercase tw-mb-6 tw-text-[#222] tw-font-bold"
          >
            <i class="fa-solid fa-circle-info tw-mr-2"></i>
            My Infomation
          </h2>
          <p
            class="tw-text-[#948daa] tw-font-normal tw-text-xl tw-w-[59%] tw-text-center tw-mx-auto"
          >
            I am a young web engineer passionate about technology and like
            to take risks. I learn website design at FPT Polytechnic
            College.
          </p>
        </div>
      </section>
    </div>
    <!-- wrap about me -->
    <div class="tw-bg-[#e9ecef]">
      <div class="container tw-flex tw-pt-[90px] tw-pb-[100px]">
        <div class="tw-mr-[100px] tw-h-auto">
          <img
            src="https://res.cloudinary.com/phuong-fpoly/image/upload/v1674699425/Phuongdzvl/z3986215443062_9346f7e00a76ff291e3aac85478d4c14_lpexsi.jpg"
            alt="Phuong Dev's Image"
            class="tw-w-[100%] tw-rounded-xl hov-img-shadow transition-3s hover:tw-rotate-3 tw-h-[90%]"
          />
        </div>
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
            world. I like work with new people. New people new Experiences.
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
                  <p class="tw-text-[#615978] tw-text-lg tw-leading-normal">
                    Chu Tuan Phuong
                  </p>
                </li>
                <li class="tw-list-none">
                  <h4
                    class="tw-text-[#222] tw-text-base tw-uppercase tw-font-bold"
                  >
                    Email
                  </h4>
                  <p class="tw-text-[#615978] tw-text-lg tw-leading-normal">
                    ctuanphuong18@gmail.com
                  </p>
                </li>
                <li class="tw-list-none">
                  <h4
                    class="tw-text-[#222] tw-text-base tw-uppercase tw-font-bold"
                  >
                    Phone
                  </h4>
                  <p class="tw-text-[#615978] tw-text-lg tw-leading-normal">
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
                  <p class="tw-text-[#615978] tw-text-lg tw-leading-normal">
                    20 Years Old
                  </p>
                </li>
                <li class="tw-list-none">
                  <h4
                    class="tw-text-[#222] tw-text-base tw-uppercase tw-font-bold"
                  >
                    EDUCATION
                  </h4>
                  <p class="tw-text-[#615978] tw-text-lg tw-leading-normal">
                    FPT Polytechnic College
                  </p>
                </li>
                <li class="tw-list-none">
                  <h4
                    class="tw-text-[#222] tw-text-base tw-uppercase tw-font-bold"
                  >
                    Freelance
                  </h4>
                  <p class="tw-text-[#615978] tw-text-lg tw-leading-normal">
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
      </div>
    </div>
    <!-- end wrap about me -->
    <!-- wrap my skills -->
    <div class="skill-section">
      <div class="container tw-flex tw-pt-[90px] tw-pb-[80px]">
        <!-- div inf -->
        <div class="tw-w-[50%]">
          <span
            class="tw-text-lg tw-uppercase tw-text-[#fd4312] tw-font-bold"
            >My Skills</span
          >
          <h2
            class="tw-text-[#fff] tw-text-5xl tw-mb-9 tw-leading-tight tw-font-bold"
          >
            I'm great in what I do and I'm loving it
          </h2>
          <p class="tw-text-[#bdb9cb] tw-text-xl tw-font-light">
            I'm a young Website Front-end Developer. I code and create web
            elements for amazing people around the world. I like work with
            new people. New people new Experiences.
          </p>
        </div>
        <!-- wrap percent -->
        <div class="tw-w-[50%] tw-pl-12 tw-mt-7">
          <!-- one progress -->
          <div class="wrap-progress tw-mt-3">
            <h4
              class="tw-font-semibold tw-text-[#fff] tw-text-base tw-mb-3"
            >
              HTML5
            </h4>
            <div class="progress">
              <div
                class="progress-bar progress-bar-success progress-bar-striped"
                role="progressbar"
                aria-valuenow="40"
                aria-valuemin="0"
                aria-valuemax="100"
                style="width: 90%"
              >
                90%
              </div>
            </div>
          </div>
          <!-- one progress -->
          <div class="wrap-progress tw-mt-3">
            <h4
              class="tw-font-semibold tw-text-[#fff] tw-text-base tw-mb-3"
            >
              CSS3
            </h4>
            <div class="progress">
              <div
                class="progress-bar progress-bar-success progress-bar-striped"
                role="progressbar"
                aria-valuenow="40"
                aria-valuemin="0"
                aria-valuemax="100"
                style="width: 70%"
              >
                70%
              </div>
            </div>
          </div>
          <!-- one progress -->
          <div class="wrap-progress tw-mt-3">
            <h4
              class="tw-font-semibold tw-text-[#fff] tw-text-base tw-mb-3"
            >
              WordPress
            </h4>
            <div class="progress">
              <div
                class="progress-bar progress-bar-success progress-bar-striped"
                role="progressbar"
                aria-valuenow="40"
                aria-valuemin="0"
                aria-valuemax="100"
                style="width: 50%"
              >
                60%
              </div>
            </div>
          </div>
          <!-- one progress -->
          <div class="wrap-progress tw-mt-3">
            <h4
              class="tw-font-semibold tw-text-[#fff] tw-text-base tw-mb-3"
            >
              UX/UI
            </h4>
            <div class="progress">
              <div
                class="progress-bar progress-bar-success progress-bar-striped active"
                role="progressbar"
                aria-valuenow="40"
                aria-valuemin="0"
                aria-valuemax="100"
                style="width: 50%"
              >
                50%
              </div>
            </div>
          </div>
        </div>
        <!-- end wrap percent -->
      </div>
    </div>
    <!-- end wrap my skills -->
  </article>
  <!-- WRAP ARTICLE -->
  ${Footer()}`;
};

export default AboutPage;
