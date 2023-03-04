import Header from "@/components/admin/Header";
import Footer from "@/components/admin/Footer";
import { router, useEffect, useState } from "@/utilities";
import { getAbout, updateAbout } from "@/api/about";
import UpImage from "@/components/admin/UpImage";
const EditAbout = ({ id }) => {
  //get one about
  const [about, setAbout] = useState({});
  useEffect(() => {
    getAbout(id)
      .then(({ data }) => setAbout(data))
      .catch((error) => console.log(error));
  }, []);

  //update about
  useEffect(() => {
    const formUpdate = document.querySelector("#form-update");
    const title = document.querySelector("#about-title");
    const content = document.querySelector("#about-content");
    const heading1 = document.querySelector("#heading1");
    const heading2 = document.querySelector("#heading2");
    const heading3 = document.querySelector("#heading3");
    const content1 = document.querySelector("#content1");
    const content2 = document.querySelector("#content2");
    const content3 = document.querySelector("#content3");
    const heading4 = document.querySelector("#heading4");
    const heading5 = document.querySelector("#heading5");
    const heading6 = document.querySelector("#heading6");
    const content4 = document.querySelector("#content4");
    const content5 = document.querySelector("#content5");
    const content6 = document.querySelector("#content6");
    const avatarAbout = document.querySelector("#about-avatar");
    const link = document.querySelector("#link-cv");

    formUpdate.addEventListener("submit", async (e) => {
      e.preventDefault();
      let avatar = "";
      avatar =
        avatarAbout.files.length > 0
          ? await UpImage(avatarAbout.files)
          : avatarAbout.accept;
      const newAbout = {
        id,
        title: title.value,
        content: content.value,
        heading1: heading1.value,
        heading2: heading2.value,
        heading3: heading3.value,
        heading4: heading4.value,
        heading5: heading5.value,
        heading6: heading6.value,
        content1: content1.value,
        content2: content2.value,
        content3: content3.value,
        content4: content4.value,
        content5: content5.value,
        content6: content6.value,
        avatar: avatar,
        link: link.value,
      };
      // update About
      updateAbout(newAbout)
        .then(() => {
          alert("Update About Successfully!");
          router.navigate("/admin/list-about");
        })
        .catch(({ errors }) => {
          alert("Update Error: " + errors);
          console.error(errors);
        });
    });
  });
  return /*html*/ `
${Header()}
 <!-- WRAP ARTICLE -->
 <article class="tw-pb-10 mt-5">
 <div class="container px-4">
   <div class="tw-my-4">
     <h3 class="text-info tw-font-bold tw-text-xl">
     <i class="fa-solid fa-pen-to-square"></i> Edit About
     </h3>
   </div>
   <form id="form-update">
     <div class="form-group">
       <label
         for="about-title"
         class="tw-block tw-mb-1 tw-mt-2 tw-font-medium"
         >About's title</label
       >
       <input
         type="text"
         class="form-control"
         id="about-title"
         placeholder="Enter About's Title..."
         value="${about.title}"
       />
     </div>
     <div class="form-group">
     <label
       for="about-content"
       class="tw-block tw-mb-1 tw-mt-2 tw-font-medium"
       >About's content</label
     >
     <input
       type="text"
       class="form-control"
       id="about-content"
       placeholder="Enter About's Content..."
       value="${about.content}"
     />
   </div>
 <div class="form-group">
 <label
   for="heading1"
   class="tw-block tw-mb-1 tw-mt-2 tw-font-medium"
   >Heading 1</label
 >
 <input
   type="text"
   class="form-control"
   id="heading1"
   placeholder="Enter header..."
   value="${about.heading1}"
 />
</div>
<div class="form-group">
<label
 for="content1"
 class="tw-block tw-mb-1 tw-mt-2 tw-font-medium"
 >Content 1</label
>
<input
 type="text"
 class="form-control"
 id="content1"
 placeholder="Enter content..."
 value="${about.content1}"
/>
</div>

<div class="form-group">
<label
for="heading2"
class="tw-block tw-mb-1 tw-mt-2 tw-font-medium"
>Heading 2</label
>
<input
type="text"
class="form-control"
id="heading2"
placeholder="Enter header..."
value="${about.heading2}"
/>
</div>
<div class="form-group">
<label
for="content2"
class="tw-block tw-mb-1 tw-mt-2 tw-font-medium"
>Content 2</label
>
<input
type="text"
class="form-control"
id="content2"
placeholder="Enter content..."
value="${about.content2}"
/>
</div>

<div class="form-group">
<label
for="heading3"
class="tw-block tw-mb-1 tw-mt-3 tw-font-medium"
>Heading 3</label
>
<input
type="text"
class="form-control"
id="heading3"
placeholder="Enter header..."
value="${about.heading3}"
/>
</div>
<div class="form-group">
<label
for="content3"
class="tw-block tw-mb-1 tw-mt-2 tw-font-medium"
>Content 3</label
>
<input
type="text"
class="form-control"
id="content3"
placeholder="Enter content..."
value="${about.content3}"
/>
</div>

<div class="form-group">
<label
for="heading4"
class="tw-block tw-mb-1 tw-mt-3 tw-font-medium"
>Heading 4</label
>
<input
type="text"
class="form-control"
id="heading4"
placeholder="Enter header..."
value="${about.heading4}"
/>
</div>
<div class="form-group">
<label
for="content4"
class="tw-block tw-mb-1 tw-mt-2 tw-font-medium"
>Content 4</label
>
<input
type="text"
class="form-control"
id="content4"
placeholder="Enter content..."
value="${about.content4}"
/>
</div>

<div class="form-group">
<label
for="heading5"
class="tw-block tw-mb-1 tw-mt-3 tw-font-medium"
>Heading 5</label
>
<input
type="text"
class="form-control"
id="heading5"
placeholder="Enter header..."
value="${about.heading5}"
/>
</div>
<div class="form-group">
<label
for="content5"
class="tw-block tw-mb-1 tw-mt-2 tw-font-medium"
>Content 5</label
>
<input
type="text"
class="form-control"
id="content5"
placeholder="Enter content..."
value="${about.content2}"
/>
</div>

<div class="form-group">
<label
for="heading6"
class="tw-block tw-mb-1 tw-mt-3 tw-font-medium"
>Heading 6</label
>
<input
type="text"
class="form-control"
id="heading6"
placeholder="Enter header..."
value="${about.heading6}"
/>
</div>
<div class="form-group">
<label
for="content6"
class="tw-block tw-mb-1 tw-mt-2 tw-font-medium"
>Content 6</label
>
<input
type="text"
class="form-control"
id="content6"
placeholder="Enter content..."
value="${about.content}"
/>
</div>
<div class="form-group">
<label
for="link-cv"
class="tw-block tw-mb-1 tw-mt-2 tw-font-medium"
>Link CV</label
>
<input
type="text"
class="form-control"
id="link-cv"
placeholder="Paste your link CV..."
value="${about.link}"
/>
</div>
<div class="form-group">
<label
for="about-avatar"
class="tw-block tw-mb-1 tw-mt-2 tw-font-medium"
>Avatar</label
>
<input
type="file"
class="form-control"
id="about-avatar"
accept= "${about.avatar}"
/>
<img src="${
    about.avatar
  }" class="tw-w-[70px] tw-h-[70px] tw-rounded tw-border tw-my-2">
</div>
     <div class="tw-mt-4">
       <button class="btn btn-success btn-add">Update About</button>
     </div>
   </form>
 </div>
</article>
<!-- END WRAP ARTICLE -->
   ${Footer()} `;
};

export default EditAbout;
