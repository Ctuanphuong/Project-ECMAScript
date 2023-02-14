import Header from "@/components/Header";
import Footer from "@/components/Footer";
const ContactPage = () => {
  return `
  ${Header()}
  <!--WRAP ARTICLE -->
  <article class="tw-mt-[80px] tw-pb-[100px]">
    <div class="container">
      <section class="hello tw-mb-[40px]">
        <div class="tw-mx-auto tw-pb-10 tw-relative">
          <h2 class="tw-text-center tw-leading-4 tw-text-2xl tw-uppercase tw-mb-6 tw-text-[#222] tw-font-bold">
            <i class="fa-solid fa-address-book tw-mr-2"></i>
            Get in touch
          </h2>
          <p class="tw-text-[#948daa] tw-font-normal tw-text-xl tw-w-[59%] tw-text-center tw-mx-auto">
            Below is the address and information for you to contact me.
          </p>
        </div>
      </section>

      <!-- wrap section contact -->
      <section class="grid-cols-3 tw-pb-[50px]">
        <!-- a column -->
        <div class="tw-flex">
          <div>
            <div class="icon-contact ">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-pin-map"
                viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                  d="M3.1 11.2a.5.5 0 0 1 .4-.2H6a.5.5 0 0 1 0 1H3.75L1.5 15h13l-2.25-3H10a.5.5 0 0 1 0-1h2.5a.5.5 0 0 1 .4.2l3 4a.5.5 0 0 1-.4.8H.5a.5.5 0 0 1-.4-.8l3-4z" />
                <path fill-rule="evenodd"
                  d="M8 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999z" />
              </svg>
            </div>

          </div>
          <div>
            <h4 class="tw-text-2xl tw-font-bold">Address</h4>
            <address class="font-open-sans tw-text-lg tw-text-[#615978]">Minh Khai, Bac Tu Liem, Ha Noi</address>
          </div>
        </div>
        <!-- end a column -->
        <!-- a column -->
        <div class="tw-flex">
          <div>
            <div class="icon-contact ">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-phone"
                viewBox="0 0 16 16">
                <path
                  d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z" />
                <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
              </svg>
            </div>
          </div>
          <div>
            <h4 class="tw-text-2xl tw-font-bold">Phone Number</h4>
            <address class="font-open-sans tw-text-lg tw-text-[#615978]">+84 869784543</address>
          </div>
        </div>
        <!-- end a column -->
        <!-- a column -->
        <div class="tw-flex">
          <div>
            <div class="icon-contact ">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-mailbox"
                viewBox="0 0 16 16">
                <path
                  d="M4 4a3 3 0 0 0-3 3v6h6V7a3 3 0 0 0-3-3zm0-1h8a4 4 0 0 1 4 4v6a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V7a4 4 0 0 1 4-4zm2.646 1A3.99 3.99 0 0 1 8 7v6h7V7a3 3 0 0 0-3-3H6.646z" />
                <path
                  d="M11.793 8.5H9v-1h5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.354-.146l-.853-.854zM5 7c0 .552-.448 0-1 0s-1 .552-1 0a1 1 0 0 1 2 0z" />
              </svg>
            </div>

          </div>
          <div>
            <h4 class="tw-text-2xl tw-font-bold">Email</h4>
            <address class="font-open-sans tw-text-lg tw-text-[#615978]">ctuanphuong18@gmail.com</address>
          </div>
        </div>
        <!-- end a column -->
      </section>
      <!-- end section contact -->

      <!-- section form -->
      <section class="tw-flex tw-mt">
        <div class="sec-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6360.988841678123!2d105.74171053113166!3d21.05245676423713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313455a2979cad73%3A0xd73e878e23ff9ddd!2zNTMvNTkvNTAgUC4gTmfhu41hIExvbmcsIE1pbmggS2hhaSwgQuG6r2MgVOG7qyBMacOqbSwgSMOgIE7hu5lpLCBWaeG7h3QgTmFt!5e1!3m2!1svi!2s!4v1675729869112!5m2!1svi!2s"
            style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
            class="tw-w-full tw-h-full"></iframe>
        </div>
        <div class="sec-mess">
          <h3 class="tw-text-[#222] tw-text-4xl tw-font-bold tw-mb-[40px]">Write me a message</h3>
          <div>
            <form>
              <div class="row">
                <div class="col">
                  <input type="text" class="form-control" placeholder="Your Name*">
                </div>
                <div class="col">
                  <input type="text" class="form-control" placeholder="Your Email*">
                </div>
                <div class="form-group">
                  <label for="exampleFormControlTextarea1"></label>
                  <textarea class="form-control" id="exampleFormControlTextarea1" rows="8"
                    placeholder="Your message here*"></textarea>
                </div>
              </div>
              <button type="submit" class="btn-mess">Send message</button>
            </form>
          </div>
        </div>
      </section>
      <!-- end section form -->
    </div>
  </article>
  <!-- END WRAP ARTICLE -->
  ${Footer()}`;
};

export default ContactPage;
