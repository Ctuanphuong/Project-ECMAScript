import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect, useState } from "@/utilities";
import SendEmail from "@/components/SendEmail";
import { getContacts } from "@/api/contact";
const ContactPage = () => {

  //get one contact
  const [contacts, setContacts] = useState([]);
  useEffect(() => {
    getContacts().then(({ data }) => setContacts(data))
      .catch((error) => console.error(error));
  }, []);
  const newContact = contacts.slice(0, 1);
  //gọi sendEmail
  useEffect(() =>
    document
      .getElementById("contact-form")
      .addEventListener("submit", function (event) {
        event.preventDefault();
        SendEmail()
      })
  );

  return /*html*/ `
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
        ${newContact.map(contact => {
    return /*html*/ `
     <!-- a column -->
           <div class="tw-flex">
           <div>
           <div class="icon-contact">
             <img src="${contact.img1}" class="tw-w-[40%] tw-h-[40%]">
           </div>
         </div>
         <div>
           <h4 class="tw-text-2xl tw-font-bold">${contact.heading1}</h4>
           <address class="font-open-sans tw-text-lg tw-text-[#615978]">${contact.content1}</address>
         </div>
       </div>
       <!-- end a column -->
       <!-- a column -->
       <div class="tw-flex">
       <div>
       <div class="icon-contact">
         <img src="${contact.img2}" class="tw-w-[40%] tw-h-[40%]">
       </div>
     </div>
     <div>
       <h4 class="tw-text-2xl tw-font-bold">${contact.heading2}</h4>
       <address class="font-open-sans tw-text-lg tw-text-[#615978]">${contact.content2}</address>
     </div>
   </div>
   <!-- end a column -->
       <!-- a column -->
       <div class="tw-flex">
       <div>
       <div class="icon-contact">
         <img src="${contact.img3}" class="tw-w-[40%] tw-h-[40%]">
       </div>
     </div>
     <div>
       <h4 class="tw-text-2xl tw-font-bold">${contact.heading3}</h4>
       <address class="font-open-sans tw-text-lg tw-text-[#615978]">${contact.content3}</address>
     </div>
   </div>
   <!-- end a column -->`
  })}
         
      </section>
      <!-- end section contact -->

      <!-- section form -->
      <section class="tw-flex tw-mt">
        <div class="sec-map">
        ${contacts.map((contact) => {
    return /*html*/ `${contact.link}`
  }).join("")}
        </div>
        <div class="sec-mess">
          <h3 class="tw-text-[#222] tw-text-4xl tw-font-bold tw-mb-[40px]">Write me a message</h3>
          <div>
            <form id="contact-form">
              <div class="row">
                <div class="col">
                  <input type="text" class="form-control" placeholder="Your Name*" id="name" required>
                </div>
                <div class="col">
                  <input type="email" class="form-control" placeholder="Your Email*" id="email" required>
                </div>
                <div class="form-group">
                  <label for="exampleFormControlTextarea1"></label>
                  <textarea class="form-control" id="message" rows="8"
                    placeholder="Your message here*" required></textarea>
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
