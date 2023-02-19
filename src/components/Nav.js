import { menus } from "@/data/menus";
const Nav = () => {
  return /*html*/ `${menus
    .map((menu) => {
      return /*html*/ `<li class="tw-px-5 list-none">
    <a
      href="${menu.link}" data-navigo
      class="tw-no-underline tw-font-bold tw-text-lg tw-text-[#222] transition-15s hov-txt-menu"
     >${menu.name}</a
    >
  </li>`;
    })
    .join("")}`;
};

export default Nav;
